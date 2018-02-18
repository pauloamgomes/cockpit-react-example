<?php
 return array (
  'name' => 'banner',
  'label' => 'Banner',
  '_id' => 'banner5a70f1cfbf4ca',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => 'Name',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'title',
      'label' => 'Title',
      'type' => 'set',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'name' => 'text',
            'type' => 'text',
          ),
          1 => 
          array (
            'name' => 'color',
            'type' => 'color',
          ),
        ),
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'heading',
      'label' => '',
      'type' => 'set',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'fields' => 
        array (
          0 => 
          array (
            'name' => 'text',
            'type' => 'text',
          ),
          1 => 
          array (
            'name' => 'color',
            'type' => 'color',
          ),
        ),
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'image',
      'label' => 'Banner Image',
      'type' => 'image',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'meta' => 
        array (
          'title' => 
          array (
            'type' => 'text',
            'label' => 'Title',
          ),
          'alt' => 
          array (
            'type' => 'text',
            'label' => 'Alt',
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
      'required' => true,
    ),
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1517351375,
  '_modified' => 1518912279,
  'color' => '#AC92EC',
  'acl' => 
  array (
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
  'icon' => 'photo.svg',
);