<?php
 return array (
  'name' => 'faq',
  'label' => 'FAQ',
  '_id' => 'faq5a61417dd61e3',
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
        'maxlength' => 20,
      ),
      'width' => '1-1',
      'lst' => true,
      'required' => true,
    ),
    1 => 
    array (
      'name' => 'title',
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
    2 => 
    array (
      'name' => 'faqs',
      'label' => '',
      'type' => 'repeater',
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
            'type' => 'text',
            'label' => 'Question',
          ),
          1 => 
          array (
            'type' => 'markdown',
            'label' => 'Answer',
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
  '_created' => 1516323197,
  '_modified' => 1517830195,
  'color' => '#AC92EC',
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
  'icon' => 'items.svg',
);