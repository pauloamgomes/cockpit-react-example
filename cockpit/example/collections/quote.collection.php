<?php
 return array (
  'name' => 'quote',
  'label' => 'Quote',
  '_id' => 'quote5a6bcdded94e3',
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
      'width' => '1-1',
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
      'width' => '1-1',
      'lst' => true,
      'acl' => 
      array (
      ),
    ),
    2 => 
    array (
      'name' => 'author',
      'label' => '',
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
      'lst' => true,
    ),
  ),
  'sortable' => true,
  'in_menu' => false,
  '_created' => 1517014494,
  '_modified' => 1517830175,
  'color' => '#AC92EC',
  'acl' => 
  array (
    'public' => 
    array (
      'entries_view' => true,
    ),
    'author' => 
    array (
      'entries_view' => true,
    ),
    'api' => 
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
  'icon' => 'horn.svg',
);