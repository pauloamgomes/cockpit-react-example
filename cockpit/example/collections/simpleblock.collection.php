<?php
 return array (
  'name' => 'simpleblock',
  'label' => 'Simple Block',
  '_id' => 'simpleblock5a6bcd6e5d5ff',
  'fields' => 
  array (
    0 => 
    array (
      'name' => 'name',
      'label' => 'Block Name',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-2',
      'lst' => true,
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'variant',
      'label' => '',
      'type' => 'select',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'options' => 'Darken, Lighten',
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'headline',
      'label' => 'Headline',
      'type' => 'text',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    3 => 
    array (
      'name' => 'content',
      'label' => 'Content',
      'type' => 'markdown',
      'default' => '',
      'info' => '',
      'localize' => false,
      'options' => 
      array (
      ),
      'width' => '1-1',
      'lst' => false,
    ),
    4 => 
    array (
      'name' => 'cta',
      'label' => 'Call to Action',
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
            'name' => 'link',
            'type' => 'text',
          ),
          1 => 
          array (
            'name' => 'text',
            'type' => 'text',
          ),
          2 => 
          array (
            'name' => '_blank',
            'type' => 'boolean',
          ),
        ),
      ),
      'width' => '1-1',
      'lst' => false,
      'acl' => 
      array (
      ),
    ),
    5 => 
    array (
      'name' => 'picture',
      'label' => 'Picture',
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
        ),
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    6 => 
    array (
      'name' => 'float',
      'label' => 'Picture Float',
      'type' => 'select',
      'default' => '',
      'info' => '',
      'group' => '',
      'localize' => false,
      'options' => 
      array (
        'options' => 'None, Left, Right',
      ),
      'width' => '1-2',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
  ),
  'sortable' => false,
  'in_menu' => false,
  '_created' => 1517014382,
  '_modified' => 1518825877,
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
  'icon' => 'text.svg',
);