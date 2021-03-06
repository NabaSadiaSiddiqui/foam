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
  name: 'DocumentationBookFullPageDocView',
  package: 'foam.documentation',
  extendsModel: 'foam.documentation.FullPageDocView',
  documentation: 'Displays the documentation of the given book.',

  requires: ['foam.documentation.DocumentationBookSummaryDocView',
             'foam.documentation.DocChaptersView'],

  templates: [

    function toInnerHTML()    {/*
<%    this.destroy(); %>
<%    if (this.data) {  %>
        $$data{ model_: 'foam.documentation.DocumentationBookSummaryDocView' }
        <div class="chapters">
          $$chapters{ model_: 'foam.documentation.DocChaptersView' }
        </div>
<%    } %>
    */}
  ]

});
