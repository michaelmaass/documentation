---
sidebarDepth: 1
---

# Troubleshooting

If after configuring the form and setting some actions the submission fails to execute correctly, it could be related to PHP underlying errors or server configuration.

## Submission Fail With Vague Error

The form displays a `Submission Failed` error without any further details, it is most likely a suppressed PHP error. To get more insights about it you can:

- Check the server PHP recent error logs.
- Open the Customizer and submit the form again making sure _Error Reporting_ is enabled.

::: tip
Error reporting can be enabled in Joomla Global `configuration` or in WordPress `wp-config.php` file.
:::

## Submission Fail With No Error

The form does not display any visual feedback regarding the error, it could be the `.htaccess` redirecting the `post` request.

The best way to debug this is to check if:

- In the browser console. check if a request redirect is happening when the form is submitted.
- In the `.htaccess` file, check if there is any rule that is affecting the `URL`, eg removing/adding a trailing slash.

If this is the case, you can either remove such rule, or make it more specific, for example by restricting the redirect to only affect GET requests, like so:

**before**
```
# Remove Trailing Slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,NC,L]
```

**after**
```
# Remove Trailing Slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_METHOD} GET
RewriteRule ^(.*)/$ /$1 [R=301,NC,L]
```

## No Email Is Sent

When dealing with email we must distinguish between sending and delivery. While we can assure the email has been sent we cannot warranty it has been delivered, as that is beyond our control. Most of the time emails are not delivered because of server misconfiguration, but also because there are simply discarded by the destination server.

To rise the delivery rate it is important to ensure the emails are being sent from a trusted source, which is only possible with an SMTP server or 3rd party service.

:::tip
For testing purposes we recommend the free service from [Mailtrap](https://mailtrap.io) which allows you to test if the emails are being sent and give them a punctuation for a better delivery. If you don't want to open an account feel free to reach out to our support and we will assist you using ours.
:::

## SPAM

SPAM is a problem which impacts all publicly accessible forms and fighting is complicated by the fact that spammers and bots are constantly evolving their methods. There are a number of solutions you can use to reduce the amount of spam, but note that there’s not any single anti-spam method in the world able to catch 100% of it.

You can find hundreds of different anti-spam techniques and services, being the most popular ones captcha based solutions and the honeypot technique, which we both support and recommend using together. Simply drop reCaptcha or hCatpcha element together with Honeypot element in any form and fulfill the settings. That should considerably reduce the amount, but remember that no solution is definitive.

