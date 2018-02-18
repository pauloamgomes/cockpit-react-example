<?php
 return array (
  'name' => 'basicpage',
  'label' => 'Basic Page',
  '_id' => 'basicpage5a613d518cf05',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'title',
      'label' => 'Title',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
        'slug' => true,
        'maxlength' => 60,
        'minlength' => 5,
        'required' => true,
      ),
      'width' => '1-1',
      'lst' => true,
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'published',
      'label' => 'Published',
      'type' => 'boolean',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
        'default' => false,
        'label' => false,
      ),
      'width' => '1-4',
      'lst' => true,
    ),
    2 => 
    array (
      'name' => 'menu',
      'label' => 'Visible on menu',
      'type' => 'boolean',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'label' => false,
      ),
      'width' => '1-4',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'subheading',
      'label' => 'Subheading',
      'type' => 'boolean',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-4',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    4 => 
    array (
      'name' => 'components',
      'label' => 'Components',
      'type' => 'multiplecollectionlink',
      'default' => '',
      'info' => 'Select components to use on that page',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'links' => 
        array (
          0 => 
          array (
            'name' => 'banner',
            'display' => 'name',
          ),
          1 => 
          array (
            'name' => 'carousel',
            'display' => 'name',
          ),
          2 => 
          array (
            'name' => 'showmore',
            'display' => 'name',
          ),
          3 => 
          array (
            'name' => 'faq',
            'display' => 'name',
          ),
          4 => 
          array (
            'name' => 'simpleblock',
            'display' => 'name',
          ),
          5 => 
          array (
            'name' => 'quote',
            'display' => 'name',
          ),
          6 => 
          array (
            'name' => 'googlemap',
            'display' => 'name',
          ),
          7 => 
          array (
            'name' => 'text',
            'display' => 'name',
          ),
          8 => 
          array (
            'name' => 'columns',
            'display' => 'name',
          ),
        ),
        'limit' => false,
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'sortable' => true,
  'in_menu' => false,
  '_created' => 1516322129,
  '_modified' => 1518828697,
  'color' => '',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => true,
    ),
  ),
  'rules' => 
  array (
    'create' => 
    array (
    ),
    'read' => 
    array (
    ),
    'update' => 
    array (
    ),
    'delete' => 
    array (
    ),
  ),
  'contentpreview' => 
  array (
    'enabled' => true,
  ),
  'icon' => 'module.svg',
);