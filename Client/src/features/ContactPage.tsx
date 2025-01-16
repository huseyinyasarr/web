import { Container, Paper, Typography, Box, Link } from "@mui/material";
import { Instagram, Email } from "@mui/icons-material";

export default function ContactPage() {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                    İletişim
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', mt: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Instagram color="primary" sx={{ fontSize: 30 }} />
                        <Typography variant="h6">
                            <Link href="https://www.instagram.com/aytasarim61" target="_blank" color="primary" underline="hover">
                                @aytasarim61
                            </Link>
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Email color="primary" sx={{ fontSize: 30 }} />
                        <Typography variant="h6">
                            <Link href="mailto:aytasarım61@gmail.com" color="primary" underline="hover">
                                aytasarım61@gmail.com
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}