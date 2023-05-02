import notifee, { AndroidImportance } from '@notifee/react-native';

export const onDisplayNotification = async (title, body) => {
  


        await notifee.requestPermission()
    
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
            sound: 'default',
            importance: AndroidImportance.HIGH,
        });
    
        // Display a notification
        await not
    }