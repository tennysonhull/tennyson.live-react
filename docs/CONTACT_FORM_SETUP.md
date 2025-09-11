# Contact Form Setup Guide

## Overview
The contact form uses Formspree for spam protection and email delivery. This is a free service that handles form submissions without requiring a backend server.

## Setup Steps

### 1. Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### 2. Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Give your form a name (e.g., "Tennyson.live Contact Form")
3. Add your email address where you want to receive submissions
4. Copy the form ID (it will look like `xqkzqkzq`)

### 3. Set Up Environment Variable
1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` and add your Formspree form ID:
   ```bash
   VITE_FORMSPREE_FORM_ID=xqkzqkzq
   ```

3. The ContactForm component will automatically use this environment variable

### 4. Production Deployment (cPanel)
For production deployment on cPanel hosting:

1. **Set environment variables before building:**
   ```bash
   export VITE_FORMSPREE_FORM_ID=xqkzqkzq
   npm run build
   ```

2. **Or create a `.env.production` file:**
   ```bash
   VITE_FORMSPREE_FORM_ID=xqkzqkzq
   ```

3. **Upload the `dist` folder** to your cPanel hosting

### 5. Test the Form
1. Build and deploy your site
2. Submit a test message through the contact form
3. Check your email for the submission
4. Verify that spam protection is working

## Features

### Built-in Spam Protection
- **Honeypot fields**: Hidden fields that catch bots
- **Rate limiting**: Prevents spam submissions
- **Content filtering**: Automatically filters suspicious content
- **IP blocking**: Blocks known spam IPs

### Form Validation
- **Client-side validation**: Real-time validation feedback
- **Required fields**: Name, email, and message are required
- **Email format validation**: Ensures valid email addresses
- **Visual feedback**: Loading states and success/error messages

### Styling
- **Theme integration**: Automatically adapts to all theme colors
- **Responsive design**: Works on all device sizes
- **Glass effect**: Matches the site's aesthetic
- **Smooth animations**: React Spring animations for interactions

## Alternative Services

If you prefer other options:

### Netlify Forms
- **Setup**: Add `data-netlify="true"` to the form element
- **Free tier**: 100 submissions/month
- **Best for**: Sites hosted on Netlify

### EmailJS
- **Setup**: Connect directly to Gmail/Outlook
- **Free tier**: 200 emails/month
- **Best for**: Direct email integration

## Customization

### Adding Fields
To add more fields to the form:

1. Update the `FormData` interface:
   ```typescript
   interface FormData {
     name: string;
     email: string;
     subject: string;
     message: string;
     phone?: string; // New field
   }
   ```

2. Add the field to the form state:
   ```typescript
   const [formData, setFormData] = useState<FormData>({
     name: '',
     email: '',
     subject: '',
     message: '',
     phone: '' // New field
   });
   ```

3. Add the input field to the JSX:
   ```jsx
   <input
     type="tel"
     name="phone"
     value={formData.phone}
     onChange={handleInputChange}
     className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-200 font-elegant"
     placeholder="Your phone number"
   />
   ```

### Styling Changes
The form uses Tailwind classes and theme variables, so it will automatically adapt to your theme changes. You can customize:

- **Colors**: Update the gradient and accent colors
- **Spacing**: Modify padding and margins
- **Animations**: Adjust React Spring animations
- **Layout**: Change the grid layout for different screen sizes

## Troubleshooting

### Form Not Submitting
1. Check that the Formspree form ID is correct
2. Verify your Formspree account is active
3. Check browser console for errors
4. Ensure all required fields are filled

### Not Receiving Emails
1. Check your spam folder
2. Verify the email address in Formspree settings
3. Check Formspree dashboard for submission logs
4. Ensure your email provider isn't blocking Formspree

### Spam Issues
1. Formspree's built-in protection should handle most spam
2. You can add additional validation in the component
3. Consider upgrading to Formspree Pro for advanced spam protection
4. Monitor the Formspree dashboard for spam patterns

## Security Notes

- **No sensitive data**: The form only collects contact information
- **HTTPS required**: Formspree requires HTTPS for production
- **Rate limiting**: Built-in protection against abuse
- **Data privacy**: Formspree is GDPR compliant

## Cost

- **Free tier**: 50 submissions/month
- **Pro tier**: $10/month for 1,000 submissions
- **No credit card required** for free tier
- **Upgrade anytime** if you need more submissions
