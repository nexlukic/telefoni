<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="urslet">
        <html>
            <body>
                <h1 style="color:blue;text-align:left">SITEMAP</h1>
                <table border="1">
                    <tr style="background:blue; color:white;">
                        <th style="display:inline-block; padding:5px;">Link</th><th>Poslednji update</th>
                        <th>Novi update</th>
                        <th>Prioritet</th>
                    </tr><xsl:for-each select="url"><tr style="background:blue;color:white;font-style:italic;">
                    <td style="display:inline-block; padding:5px;"><xsl:value-of select="loc"/></td>
                    <td><xsl:value-of select="lastmod"/></td>
                    <td><xsl:value-of select="changefraq"/></td>
                    <td><xsl:value-of select="priority"/></td>
                </tr>
                </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>