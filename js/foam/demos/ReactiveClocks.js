/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
  package: 'foam.demos',

  name: 'ReactiveClocks',
  extendsModel: 'foam.ui.View',

  requires: [
    'foam.input.Mouse',
    'Timer',
    'foam.demos.ClockView',
    'foam.graphics.CView',
    'foam.ui.DetailView'
  ],

  properties: [
    {
      name: 'timer',
      view: { factory_: 'foam.ui.DetailView', showActions: true },
      factory: function() { return this.Timer.create(); }
    },
    { name: 'mouse',  factory: function() { return this.Mouse.create(); } },
    { name: 'space',  factory: function() { return this.CView.create({width: 1500, height: 1000, background:'white'}); } },
    { name: 'clock1', factory: function() { return this.ClockView.create({x:300, y:300, r:60, color:'red'}); } },
    { name: 'clock2', factory: function() { return this.ClockView.create({x:0, y:0, r:60, color:'green'}); } }
  ],

  templates: [
    function toHTML() {/*<table><tr><td valign="top">$$timer</td><td><%= this.space %></td></tr></table>*/}
  ],
  methods: {
    init: function() {
      this.SUPER();

      Events.dynamic(function () {
        this.clock1.x = this.mouse.x;
        this.clock1.y = this.mouse.y;
      }.bind(this));

      Events.dynamic(function () {
        this.clock2.x = this.clock1.x + 200*Math.cos(this.timer.time*Math.PI/1000);
        this.clock2.y = this.clock1.y + 200*Math.sin(this.timer.time*Math.PI/1000);
      }.bind(this));

      this.space.addChild(this.clock1);
      this.space.addChild(this.clock2);

      this.timer.start();
    },
    initHTML: function() {
      this.SUPER();
      this.mouse.connect(this.space.$);
    }
  }
});
