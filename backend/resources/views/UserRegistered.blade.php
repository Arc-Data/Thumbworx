<!DOCTYPE html>
<html>
<head>
    <title>Your New Account Password</title>
</head>
<body>
    <h1>Hello, {{ $user->name }}</h1>
    <p>Thank you for registering. Here is your new password:</p>
    <p><strong>{{ $password }}</strong></p>
    <p>Please change your password after logging in for the first time.</p>
    <p>Regards,<br>{{ config('app.name') }}</p>
</body>
</html>
