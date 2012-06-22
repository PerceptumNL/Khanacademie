﻿// jQuery Mustache Plug-In 
// Version: 1.0.0, Last updated: 2/17/2011
//
// GitHub       - https://github.com/thinkdevcode/jQuery-Mustache
// Dependancy   - https://github.com/janl/mustache.js/
// Contact      - gin4lyfe@gmail.com (Eugene Alfonso)
// 
// Copyright © 2011 Eugene Alfonso (gin4lyfe@gmail.com)
//  
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation
// files (the "Software"), to deal in the Software without
// restriction, including without limitation the rights to use,
// copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the
// Software is furnished to do so, subject to the following
// conditions:
//  
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//  
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE.
// 
// 
// Copyright (c) 2011 Eugene Alfonso,
// Licensed under the MIT license.

(function ($) {
    $.fn.mustache = function (data, partial, stream) {
    	if (Mustache && data) {
    	    return $(Mustache.to_html(this.html(), data, partial, stream));
        }
    };
})(jQuery);
