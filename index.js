<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Discord Bot Help(made by Mystix :P)</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #36393f;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #7289da;
            font-weight: 500;
        }
        .command-list {
            background-color: #2f3136;
            padding: 20px;
            border-radius: 8px;
            max-width: 800px;
            margin: 0 auto;
        }
        .command {
            margin-bottom: 15px;
        }
        .command-name {
            font-weight: 500;
            color: #7289da;
        }
        .command-description {
            margin-left: 20px;
            color: #b9bbbe;
            font-weight: 400;
        }
    </style>
</head>
<body>
    <h1>Discord Bot Help</h1>
    <div class="command-list">
        <!-- General Commands -->
        <div class="command">
            <div class="command-name">$help</div>
            <div class="command-description">Displays this help message with all available commands.</div>
        </div>

        <!-- Moderation Commands -->
        <div class="command">
            <div class="command-name">$ban @user [reason]</div>
            <div class="command-description">Bans a user from the server. (Admin only)</div>
        </div>
        <div class="command">
            <div class="command-name">$unban user_id</div>
            <div class="command-description">Unbans a user by their ID. (Admin only)</div>
        </div>
        <div class="command">
            <div class="command-name">$kick @user [reason]</div>
            <div class="command-description">Kicks a user from the server. (Admin only)</div>
        </div>
        <div class="command">
            <div class="command-name">$mute @user [reason]</div>
            <div class="command-description">Mutes a user. (Admin only)</div>
        </div>
        <div class="command">
            <div class="command-name">$unmute @user</div>
            <div class="command-description">Unmutes a user. (Admin only)</div>
        </div>
        <div class="command">
            <div class="command-name">$tempmute @user duration_in_minutes [reason]</div>
            <div class="command-description">Temporarily mutes a user for a specified duration. (Admin only)</div>
        </div>

        <!-- Utility Commands -->
        <div class="command">
            <div class="command-name">$poll 'question' 'option1' 'option2' ...</div>
            <div class="command-description">Creates a poll with up to 10 options.</div>
        </div>
        <div class="command">
            <div class="command-name">$embed 'title' 'description' [color]</div>
            <div class="command-description">Sends a custom embed message. Color is optional (e.g., 0x00ff00 for green).</div>
        </div>
        <div class="command">
            <div class="command-name">$write channel_id 'message'</div>
            <div class="command-description">Sends a message to a specific channel. (Admin only)</div>
        </div>
    </div>
</body>
</html>
