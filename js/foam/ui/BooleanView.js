/**
 * @license
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

CLASS({
  name: 'BooleanView',
  package: 'foam.ui',
  
  extendsModel: 'foam.ui.SimpleView',

  properties: [
    {
      name: 'data'
    },
    {
      name:  'name',
      label: 'Name',
      type:  'String',
      defaultValue: 'field'
    }
  ],

  methods: {
    toHTML: function() {
      return '<input type="checkbox" id="' + this.id + '" ' + ( this.data ? 'checked ' : '' ) + 'name="' + this.name + '"' + this.cssClassAttr() + '/>';
    },

    initHTML: function() {
      this.domValue = DomValue.create(this.$, 'change', 'checked');

      Events.link(this.data$, this.domValue);
    },

    destroy: function(isParentDestroyed) {
      this.SUPER(isParentDestroyed);
      Events.unlink(this.domValue, this.data$);
    }
  }
});

