website_multi_image
===================
Website Multi Image stores multiple product images in a tab: 'Product Images' under Sales >> Product. These images are displayed on the product view page in a synced carousel (two carousels one large and one small) using OwlCarousel2.

Website Multi-Image

<H4>Please use the 9.0 branch:</H4> 
    sudo git clone -b 9.0 https://github.com/OdooCommunityWidgets/website_multi_image.git
This will provide you with the latest working 'stable' version of the module built for the 9.0 branch. Please be advised this module is still under development.

<H3>Frontend Demo:</H3>
<img src="https://cloud.githubusercontent.com/assets/2337666/5392143/3d4af6e8-815e-11e4-9512-3612bfdaa86a.png"/>

<H3>Admin Demo:</H3>
<img src="https://cloud.githubusercontent.com/assets/2337666/5392142/3d2107d4-815e-11e4-87f8-603f3c5ceeb8.png"/>

TODO: master
===================
* Image magnification
  * Options
    * Magnifier.js: https://github.com/mark-rolich/Magnifier.js
    * Zoom (jQuery): https://github.com/jackmoore/zoom/tree/master
    * BootstrapMagnify: https://github.com/marcaube/bootstrap-magnify

* Secondary Image (on Mouseover) (Category list view and grid view)
* Image thumbnail preview widget in admin list view (to replace current download link)
* Attach Images to product variants to allow for image galleries based on product variants. This will be designed to switch galleries based on product variant attributes (eg. colour, size, etc.).
* Add product variant swatch thumbnails in a similar manner to Magento 1.9.1 (eg. t-if from tags or labels).
* Add support for WebRotate360 module website_webrotate360 (*not yet built).
* Add support for importing multiple images from URL or local path as default to allow for a more user-friendly mass update/import of product images in a similar manner to the Magmi project for Magento
