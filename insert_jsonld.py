with open('src/app/layout.tsx', 'r') as f:
    content = f.read()

json_ld = """
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Goldy Solar GmbH",
              "image": "https://goldysolar.de/logo.png",
              "url": "https://goldysolar.de",
              "telephone": "+4962215026666",
              "email": "info@goldysolar.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rudolf-Diesel-Straße 11",
                "addressLocality": "Heidelberg",
                "postalCode": "69115",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 49.398,
                "longitude": 8.672
              },
              "areaServed": "DE",
              "priceRange": "$$$"
            })
          }}
        />
"""

content = content.replace("</body>", json_ld + "      </body>")

with open('src/app/layout.tsx', 'w') as f:
    f.write(content)
