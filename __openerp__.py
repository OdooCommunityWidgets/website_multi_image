{
    'name': 'Product Multi-Image',
    'category': 'Website',
    'version': '1.0',
    'author': 'Luke Branch, Cristian Sebastian Rocha, Ryan Cole',
    'depends': ['product', 'sale', 'website_sale'],
    'data': [
        'views/product_images.xml',
        'views/website_product_image_carousel.xml',
        'views/theme.xml',
        'views/res_config.xml',
        'security/ir.model.access.csv',
    ],
    'application': True,
}
