import { typeOf } from '@ember/utils';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/info-table-row';

/**
 * @module InfoTableRow
 * `InfoTableRow` displays a label and a value in a table-row style manner. The component is responsive so
 * that the value breaks under the label on smaller viewports.
 *
 * @example
 * ```js
 * <InfoTableRow @value={{5}} @label="TTL" @helperText="Some description"/>
 * ```
 *
 * @param value=null {any} - The the data to be displayed - by default the content of the component will only show if there is a value. Also note that special handling is given to boolean values - they will render `Yes` for true and `No` for false.
 * @param label=null {string} - The display name for the value.
 * @param helperText=null {string} - Text to describe the value displayed beneath the label.
 * @param alwaysRender=false {Boolean} - Indicates if the component content should be always be rendered.  When false, the value of `value` will be used to determine if the component should render.
 * @param [type=array] {string} - The type of value being passed in.  This is used for when you want to trim an array.  For example, if you have an array value that can equal length 15+ this will trim to show 5 and count how many more are there
 */
export default Component.extend({
  layout,
  'data-test-component': 'info-table-row',
  classNames: ['info-table-row'],
  isVisible: or('alwaysRender', 'value'),

  alwaysRender: false,
  label: null,
  helperText: null,
  value: null,

  valueIsBoolean: computed('value', function() {
    return typeOf(this.get('value')) === 'boolean';
  }),
});
