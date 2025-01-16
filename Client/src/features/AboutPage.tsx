import { Container, Typography, Box, Paper } from "@mui/material";

export default function AboutPage() {
    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4, textAlign: 'center' }}>
                <Typography variant="h3" color="primary" gutterBottom>
                    🌸 AY Tasarımı 🌸
                </Typography>

                <Typography variant="h6" sx={{ mb: 4, fontStyle: 'italic' }}>
                    Sevgi ve özenle tasarlanmış özel anlarınızı unutulmaz kılacak kişiye özel hediyelikler!
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                        ✨ Hizmetlerimiz:
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        • Söz, Nişan, Kına ve Düğün Hediyelikleri
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        • Kişiye özel tasarımlar
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        • Şık ev dekorasyon ürünleri
                    </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        🎁 Özel siparişler için bizimle iletişime geçin!
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        📩 DM'den ulaşabilirsiniz.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        🌐 Bilgi için: @aytasarim61
                    </Typography>
                </Box>

                <Typography variant="h6" color="primary" sx={{ fontStyle: 'italic' }}>
                    🌿 Hayallerinizdeki tasarımlar, sizin için burada hayat buluyor!
                </Typography>
            </Paper>
        </Container>
    );
} 