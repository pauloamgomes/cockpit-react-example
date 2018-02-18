import React from 'react';
import PropTypes from 'prop-types';
import { lightBlue700, white } from 'material-ui/styles/colors';

const styles = {
  default: {
    width: '100%',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    marginBottom: 20,
  },
  Darken: {
    backgroundColor: lightBlue700,
    color: white,
  },
  Lighten: {
    backgroundColor: white,
    color: lightBlue700,
  },
};

const componentsConfig = [
  {
    name: 'banner',
    component: require('../../components/Banner').default,
  },
  {
    name: 'faq',
    component: require('../../components/Faq').default,
  },
  {
    name: 'googlemap',
    component: require('../../components/GoogleMap').default,
  },
  {
    name: 'quote',
    component: require('../../components/Quote').default,
  },
  {
    name: 'showmore',
    component: require('../../components/ShowMore').default,
  },
  {
    name: 'simpleblock',
    component: require('../../components/SimpleBlock').default,
  },
  {
    name: 'carousel',
    component: require('../../components/Carousel').default,
  },
  {
    name: 'text',
    component: require('../../components/TextBlock').default,
  },
  {
    name: 'columns',
    component: require('../../components/ColumnsBlock').default,
  },
];

let dynamicComponents = {};

for (var i = componentsConfig.length - 1; i >= 0; i--) {
  dynamicComponents[componentsConfig[i].name] = componentsConfig[i].component;
}

const Components = props => {
  return (
    <div>
      {props.components &&
        props.components.map((collection, idx) => {
          if (dynamicComponents.hasOwnProperty(collection._link)) {
            let Component = dynamicComponents[collection._link];
            let variant = collection.hasOwnProperty('variant')
              ? collection.variant
              : 'Lighten';
            let style = styles.hasOwnProperty(variant)
              ? styles[variant]
              : styles.Lighten;

            return (
              <div
                className={`component-${collection._link} style-${variant}`}
                key={`${collection._link}-${idx}`}
                style={{ ...styles.default, ...style }}
              >
                <Component {...collection} />
              </div>
            );
          } else {
            return '';
          }
        })}
    </div>
  );
};

Components.propTypes = {
  components: PropTypes.array,
};

export default Components;
