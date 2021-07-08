 <?php

 function university_files() {
  wp_enqueue_script( 'my-js', get_theme_file_uri('/js/script.js'), NULL, '1.0' , true ); 
  wp_enqueue_style('university_main_styles', get_stylesheet_uri()); 
}

add_action('wp_enqueue_scripts', 'university_files'); 

function wpb_custom_new_menu() {
  register_nav_menus(
    array(
      'my-custom-menu' => __( 'My Custom Menu' ),
      'kids-nav-menu' => __( 'Kids Nav Menu' ),
      'womens-nav-menu' => __( 'Womens nav menu'),
      'mens-nav-menu' => __( 'Mens nav menu'),
      'new-nav-menu' => __( 'New nav menu'),
    )
  );
}
add_action( 'init', 'wpb_custom_new_menu' );

?>  