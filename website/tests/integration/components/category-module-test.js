import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('category-module', 'Integration | Component | category module', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{category-module}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
	{{#category-module}}
	  template block text
	{{/category-module}}
  `);

  assert.equal(this.$().text().trim(), '');
});
