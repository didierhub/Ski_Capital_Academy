const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

exports.addUserToDiscord = functions.firestore
    .document('customers/{userId}/payments/{paymentId}')
    .onCreate(async (snap, context) => {
        const paymentIntent = snap.data();
        const userId = context.params.userId;

        // Check if the payment is successful
        if (paymentIntent.status === 'succeeded') {
            try {
                // Fetch user details from Firebase Authentication
                const user = await admin.auth().getUser(userId);
                const userEmail = user.email;

                // Add user to Discord server
                const discordResponse = await axios.post(
                    `https://discord.com/api/v8/guilds/YOUR_DISCORD_SERVER_ID/members`,
                    {
                        access_token: 'YOUR_DISCORD_BOT_TOKEN',
                        email: userEmail,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bot YOUR_DISCORD_BOT_TOKEN`,
                        },
                    }
                );

                console.log('User added to Discord:', discordResponse.data);
            } catch (error) {
                console.error('Error adding user to Discord:', error);
            }
        }
    });
