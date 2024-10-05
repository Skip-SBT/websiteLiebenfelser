import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function AGB() {
    return (
        <Box className="sub-page">
            <Typography variant="h4" gutterBottom>
                Terms and Conditions (AGB)
            </Typography>

            <Typography paragraph>
                Welcome to <strong>Liebenfelser Consulting Group</strong>! These Terms and Conditions outline
                the rules and regulations for the use of our website, located at{' '}
                <Link href="https://www.liebenfelser.com" target="_blank" rel="noopener noreferrer">
                    www.liebenfelser.com
                </Link>
                . By accessing this website, we assume you accept these terms and conditions in full. Do not
                continue to use Liebenfelser Consulting Group if you do not agree to all the terms and
                conditions stated on this page.
            </Typography>

            <Typography variant="h5" gutterBottom>
                1. Privacy Policy
            </Typography>

            <Typography paragraph>
                Your privacy is important to us. Please read our Privacy Policy carefully for information on
                how we collect, use, and protect your personal data, including details about our use of
                Google Analytics and your interaction with our email form.
            </Typography>

            <Typography variant="h6" gutterBottom>
                1.1 Google Analytics
            </Typography>

            <Typography paragraph>
                We use <strong>Google Analytics</strong> to analyze how visitors use our website. Google
                Analytics uses cookies to track user activity on the website, such as which pages are
                viewed, how long visitors stay on each page, and which website referred them to us.
            </Typography>

            <Typography paragraph>
                By using this website, you consent to the processing of data by Google Analytics in
                accordance with Google’s privacy policy. For more information about how Google collects and
                processes data, please refer to{' '}
                <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                    Google’s Privacy Policy
                </Link>
                .
            </Typography>

            <Typography variant="h6" gutterBottom>
                1.2 Email Form
            </Typography>

            <Typography paragraph>
                If you submit your email address or any other personal data through our email form, we will
                use the information you provide for communication purposes and to respond to your inquiries.
                We will not share your personal data with third parties without your consent unless required
                by law.
            </Typography>

            <Typography paragraph>
                For more details about how we handle personal data, please refer to our{' '}
                <Link href="/privacy-policy" target="_blank">
                    Privacy Policy
                </Link>
                .
            </Typography>

            <Typography variant="h5" gutterBottom>
                2. Use of the Website
            </Typography>

            <Typography paragraph>
                By accessing our website, you agree to:
                <ul>
                    <li>Use the website for lawful purposes only.</li>
                    <li>Not engage in any activity that could harm the website or its functionality.</li>
                    <li>
                        Not attempt to access restricted areas of the website without authorization.
                    </li>
                </ul>
            </Typography>

            <Typography paragraph>
                We reserve the right to suspend or terminate access to our website for anyone who violates
                these terms.
            </Typography>

            <Typography variant="h5" gutterBottom>
                3. Intellectual Property
            </Typography>

            <Typography paragraph>
                All content, including text, images, logos, and trademarks, is the property of{' '}
                <strong>Liebenfelser Consulting Group</strong> or its licensors, unless otherwise stated.
                You may not reproduce, distribute, or use the content for commercial purposes without our
                written permission.
            </Typography>

            <Typography variant="h5" gutterBottom>
                4. Limitation of Liability
            </Typography>

            <Typography paragraph>
                While we strive to provide accurate and up-to-date information on our website, we cannot
                guarantee the completeness or accuracy of the content. We are not liable for any damages
                arising from the use of this website or reliance on the information provided.
            </Typography>

            <Typography paragraph>
                We also do not guarantee that the website will be available at all times without
                interruption or error.
            </Typography>

            <Typography variant="h5" gutterBottom>
                5. Changes to the Terms
            </Typography>

            <Typography paragraph>
                We may update these Terms and Conditions from time to time. If we make significant changes,
                we will notify you via email or by posting a prominent notice on our website. Your continued
                use of the website after any changes to the terms will be deemed acceptance of those
                changes.
            </Typography>

            <Typography variant="h5" gutterBottom>
                6. Governing Law
            </Typography>

            <Typography paragraph>
                These Terms and Conditions are governed by the laws of Switzerland. Any disputes arising
                from these terms or your use of the website will be subject to the exclusive jurisdiction of
                the courts in Switzerland.
            </Typography>

            <Typography variant="h5" gutterBottom>
                7. Contact Information
            </Typography>

            <Typography paragraph>
                If you have any questions or concerns about these Terms and Conditions, please contact us at{' '}
                <Link href="mailto:test@test.ch">test@test.ch</Link>.
            </Typography>
        </Box>
    );
}
