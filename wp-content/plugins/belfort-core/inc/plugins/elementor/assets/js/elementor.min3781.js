!function(r){"use strict";r(window).on("elementor/frontend/init",function(){a.init(),t.init(),s.init(),e.init(),d.init()});var a={init:function(){if(Boolean(elementorFrontend.isEditMode()))for(var t in qodefCore.shortcodes)for(var e in qodefCore.shortcodes[t])a.reInitShortcode(t,e)},reInitShortcode:function(e,a){elementorFrontend.hooks.addAction("frontend/element_ready/"+e+".default",function(t){void 0===qodefCore.shortcodes[e][a]?console.log(a):"function"==typeof qodefCore.shortcodes[e][a].initSlider&&t.find(".qodef-instagram-swiper-container").length?qodefCore.shortcodes[e][a].initSlider(t.find(".qodef-instagram-swiper-container"),!1):"function"==typeof qodefCore.shortcodes[e][a].initSlider&&t.find(".qodef-swiper-container").length?qodefCore.shortcodes[e][a].initSlider(t.find(".qodef-swiper-container")):"function"==typeof qodefCore.shortcodes[e][a].initPopup&&t.find(".qodef-magnific-popup").length?qodefCore.shortcodes[e][a].initPopup(t.find(".qodef-magnific-popup")):"function"==typeof qodefCore.shortcodes[e][a].initItem&&t.find(".qodef-shortcode").length?qodefCore.shortcodes[e][a].initItem(t.find(".qodef-shortcode")):qodefCore.shortcodes[e][a].init()})}},t={init:function(){elementorFrontend.hooks.addAction("frontend/element_ready/section",s.init)}},s={init:function(t){var a,o,i=t,e=Boolean(elementorFrontend.isEditMode()),n=[],d={};e&&void 0!==t?(e=window.elementor.elements,a=i.data("id"),o=i.hasClass("elementor-inner-section"),r.each(e.models,function(t,e){a==e.id?d=e.attributes.settings.attributes:o&&void 0!==e.attributes.elements.models&&e.attributes.elements.models.length&&r.each(e.attributes.elements.models,function(t,e){void 0!==e.attributes.elements.models[0]&&void 0!==e.attributes.elements.models[0].attributes.settings.attributes&&a==e.attributes.elements.models[0].attributes.id&&(d=e.attributes.elements.models[0].attributes.settings.attributes)})}),void 0!==d.qodef_parallax_type&&(n.enable_parallax=d.qodef_parallax_type),void 0!==d.qodef_parallax_image&&d.qodef_parallax_image.url&&(n.parallax_image_url=d.qodef_parallax_image.url),void 0!==d.qodef_offset_type&&(n.enable_offset=d.qodef_offset_type),void 0!==d.qodef_offset_image&&d.qodef_offset_image.url&&(n.offset_image_url=d.qodef_offset_image.url),void 0!==d.qodef_offset_parallax&&(n.offset_parallax=d.qodef_offset_parallax),void 0!==d.qodef_offset_vertical_anchor&&(n.offset_vertical_anchor=d.qodef_offset_vertical_anchor),void 0!==d.qodef_offset_vertical_position&&(n.offset_vertical_position=d.qodef_offset_vertical_position),void 0!==d.qodef_offset_horizontal_anchor&&(n.offset_horizontal_anchor=d.qodef_offset_horizontal_anchor),void 0!==d.qodef_offset_horizontal_position&&(n.offset_horizontal_position=d.qodef_offset_horizontal_position),void 0!==d.qodef_svg_bg_type&&(n.enable_svg=d.qodef_svg_bg_type),void 0!==d.qodef_svg_bg_shape&&(n.svg_shape=d.qodef_svg_bg_shape),void 0!==d.qodef_svg_bg_shape_color&&(n.svg_shape_color=d.qodef_svg_bg_shape_color),void 0!==d.qodef_svg_bg_line_drawing_animation&&(n.svg_line_drawing_animation=d.qodef_svg_bg_line_drawing_animation),void 0!==d.qodef_svg_bg_line_animation_appear_percentage&&(n.svg_line_animation_appear_percentage=d.qodef_svg_bg_line_animation_appear_percentage),void 0!==d.qodef_svg_bg_vertical_anchor&&(n.svg_vertical_anchor=d.qodef_svg_bg_vertical_anchor),void 0!==d.qodef_svg_bg_vertical_position&&(n.svg_vertical_position=d.qodef_svg_bg_vertical_position),void 0!==d.qodef_svg_bg_horizontal_anchor&&(n.svg_horizontal_anchor=d.qodef_svg_bg_horizontal_anchor),void 0!==d.qodef_svg_bg_horizontal_position&&(n.svg_horizontal_position=d.qodef_svg_bg_horizontal_position),void 0!==d.qodef_svg_bg_type_two&&(n.enable_svg_two=d.qodef_svg_bg_type_two),void 0!==d.qodef_svg_bg_shape_two&&(n.svg_shape_two=d.qodef_svg_bg_shape_two),void 0!==d.qodef_svg_bg_shape_color_two&&(n.svg_shape_color_two=d.qodef_svg_bg_shape_color_two),void 0!==d.qodef_svg_bg_line_drawing_animation_two&&(n.svg_line_drawing_animation_two=d.qodef_svg_bg_line_drawing_animation_two),void 0!==d.qodef_svg_bg_line_animation_appear_percentage_two&&(n.svg_line_animation_appear_percentage_two=d.qodef_svg_bg_line_animation_appear_percentage_two),void 0!==d.qodef_svg_bg_vertical_anchor_two&&(n.svg_vertical_anchor_two=d.qodef_svg_bg_vertical_anchor_two),void 0!==d.qodef_svg_bg_vertical_position_two&&(n.svg_vertical_position_two=d.qodef_svg_bg_vertical_position_two),void 0!==d.qodef_svg_bg_horizontal_anchor_two&&(n.svg_horizontal_anchor_two=d.qodef_svg_bg_horizontal_anchor_two),void 0!==d.qodef_svg_bg_horizontal_position_two&&(n.svg_horizontal_position_two=d.qodef_svg_bg_horizontal_position_two),void 0!==i&&s.generateOutput(i,n)):(t=qodefElementorGlobal.vars.elementorSectionHandler,r.each(t,function(e,t){t.forEach(function(t){void 0!==t.parallax_type&&"parallax"===t.parallax_type&&(i=r('[data-id="'+e+'"]'),n.parallax_type=t.parallax_type,n.parallax_image_url=t.parallax_image.url,void 0!==n.parallax_image_url&&(n.enable_parallax="parallax")),void 0!==t.offset_type&&"offset"===t.offset_type&&(i=r('[data-id="'+e+'"]'),n.offset_type=t.offset_type,n.offset_image_url=t.offset_image.url,n.offset_parallax=t.offset_parallax,n.offset_vertical_anchor=t.offset_vertical_anchor,n.offset_vertical_position=t.offset_vertical_position,n.offset_horizontal_anchor=t.offset_horizontal_anchor,n.offset_horizontal_position=t.offset_horizontal_position,void 0!==n.offset_image_url&&(n.enable_offset="offset")),void 0!==t.svg_type&&"svg"===t.svg_type&&(i=r('[data-id="'+e+'"]'),n.svg_type=t.svg_type,n.svg_shape=t.svg_shape,n.svg_shape_color=t.svg_shape_color,n.svg_line_drawing_animation=t.svg_line_drawing_animation,n.svg_line_animation_appear_percentage=t.svg_line_animation_appear_percentage,n.svg_vertical_anchor=t.svg_vertical_anchor,n.svg_vertical_position=t.svg_vertical_position,n.svg_horizontal_anchor=t.svg_horizontal_anchor,n.svg_horizontal_position=t.svg_horizontal_position,void 0!==n.svg_shape&&(n.enable_svg="svg")),void 0!==t.svg_type_two&&"svg"===t.svg_type_two&&(i=r('[data-id="'+e+'"]'),n.svg_type_two=t.svg_type_two,n.svg_shape_two=t.svg_shape_two,n.svg_shape_color_two=t.svg_shape_color_two,n.svg_line_drawing_animation_two=t.svg_line_drawing_animation_two,n.svg_line_animation_appear_percentage_two=t.svg_line_animation_appear_percentage_two,n.svg_vertical_anchor_two=t.svg_vertical_anchor_two,n.svg_vertical_position_two=t.svg_vertical_position_two,n.svg_horizontal_anchor_two=t.svg_horizontal_anchor_two,n.svg_horizontal_position_two=t.svg_horizontal_position_two,void 0!==n.svg_shape_two&&(n.enable_svg_two="svg"))}),void 0===i||i.hasClass("qodef-parallax--init")||(s.generateOutput(i,n),n=[],i.addClass("qodef-parallax--init"))}))},generateOutput:function(t,e){var a,o;void 0!==e.enable_parallax&&"parallax"===e.enable_parallax&&void 0!==e.parallax_image_url&&(r(".qodef-parallax-row-holder",t).remove(),t.removeClass("qodef-parallax qodef--parallax-row"),t.addClass("qodef-parallax qodef--parallax-row"),t.attr("data-viewport-offset","0"),t.attr("data-viewport-margin","100px 0px 100px 0px"),r('<div class="qodef-parallax-row-holder"><div class="qodef-parallax-img-holder"><div class="qodef-parallax-img-wrapper"><img class="qodef-parallax-img" src="'+e.parallax_image_url+'" alt="Parallax Image"></div></div></div>').prependTo(t),(a=new Image).onload=function(){t.find("img.qodef-parallax-img").attr("src",this.src),document.body.classList.contains("elementor-editor-active")&&qodefCore.qodefParallaxBackground.init()},a.src=e.parallax_image_url),void 0!==e.enable_offset&&"offset"===e.enable_offset&&void 0!==e.offset_image_url&&(r(".qodef-offset-image-holder",t).remove(),t.removeClass("qodef-offset-image"),a="",void 0!==e.offset_parallax&&"yes"===e.offset_parallax&&(a=" qodef-parallax-item"),t.addClass("qodef-offset-image"),r('<div class="qodef-offset-image-holder" style="position: absolute; z-index: 5; '+e.offset_vertical_anchor+":"+e.offset_vertical_position+";"+e.offset_horizontal_anchor+":"+e.offset_horizontal_position+'"><div class="qodef-offset-image-wrapper'+a+'"><img src="'+e.offset_image_url+'" alt="Offset Image"></div></div>').prependTo(t)),void 0!==e.enable_svg&&"svg"===e.enable_svg&&void 0!==e.svg_shape&&(r(".qodef-e-svg-element",t).remove(),t.removeClass("qodef-svg-shape"),o="","shape-1"===e.svg_shape?o='<svg xmlns="http://www.w3.org/2000/svg" class="qodef-svg-shape-1" width="1116.511" height="801.828" viewBox="0 0 1116.511 801.828"><g fill="none" stroke="currentColor" stroke-width="2" data-name="Group 548" opacity=".264"><path data-name="Rectangle 542" stroke-miterlimit="10" d="M1 800.187V533.925h266.262v266.262z"/><path data-name="Line 260" stroke-miterlimit="10" d="M983.22 267.664v266.262"/><path data-name="Line 261" stroke-miterlimit="10" d="M983.22-.001v267.664"/><path data-name="Line 262" stroke-miterlimit="10" d="M1116.351 267.663h-1.254"/><path data-name="Path 3201" d="M304.522 399.513V268.946H173.95Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3202" d="M305.159 532.644V402.075H174.59Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Line 263" stroke-miterlimit="10" d="M638.628 201.097v66.566"/><path data-name="Path 3203" d="M753.948 201.098h150.943v66.566H771.76" stroke-miterlimit="10"/><path data-name="Path 3204" d="M638.628 201.098v-66.566H904.89v66.566H753.948" stroke-miterlimit="10"/><path data-name="Path 3205" d="M305.8 334.228v199.7h66.566V1.403H305.8v199.7" stroke-miterlimit="10"/><path data-name="Rectangle 543" stroke-miterlimit="10" d="M983.221 800.188h-66.566V533.926h66.566z"/><path data-name="Path 3206" d="M850.089 600.49v199.7h66.566V533.927h-66.566" stroke-miterlimit="10"/><path data-name="Path 3207" d="M850.09 533.925h-66.566v266.263h66.566v-199.7" stroke-miterlimit="10"/><path data-name="Rectangle 544" stroke-miterlimit="10" d="M267.262 800.187v-66.566h371.366v66.566z"/><path data-name="Rectangle 545" stroke-miterlimit="10" d="M267.262 733.622v-66.566h371.366v66.566z"/><path data-name="Rectangle 546" stroke-miterlimit="10" d="M267.262 667.056V600.49h371.366v66.566z"/><path data-name="Rectangle 547" stroke-miterlimit="10" d="M267.262 600.491v-66.566h371.366v66.566z"/><path data-name="Rectangle 548" stroke-miterlimit="10" d="M638.628 134.532V67.966H904.89v66.566z"/><path data-name="Rectangle 549" stroke-miterlimit="10" d="M174.59 268.918H1V2.656h173.59z"/><path data-name="Rectangle 550" stroke-miterlimit="10" d="M638.628 67.967V1.401H904.89v66.566z"/><path data-name="Path 5141" d="M1 667.056a133.131 133.131 0 1 1 133.131 133.131A133.131 133.131 0 0 1 1 667.056Z"/><path data-name="Path 5139" d="M505.497 267.663a133.131 133.131 0 1 1 133.131 133.131 133.131 133.131 0 0 1-133.131-133.131Z"/><path data-name="Path 5140" d="M783.525 533.925a66.566 66.566 0 1 1 66.566 66.566 66.566 66.566 0 0 1-66.566-66.566Z"/><path data-name="Path 3208" d="M239.235 267.663a66.566 66.566 0 1 1 66.566 66.566" stroke-miterlimit="10"/><path data-name="Path 3209" d="M638.628 533.285v267.544c80.024 0 144.9-59.892 144.9-133.772s-64.876-133.772-144.9-133.772Z" stroke-miterlimit="10"/><path data-name="Path 3210" d="M638.628 267.664V1.401H904.89v266.263H771.759" stroke-miterlimit="10"/><path data-name="Path 3211" d="M505.497 267.664H372.366c0-147.055 119.208-266.263 266.262-266.263v266.263" stroke-miterlimit="10"/><path data-name="Path 3212" d="M904.89 267.663c0 147.055-119.208 266.263-266.262 266.263V267.663Z" stroke-miterlimit="10"/><path data-name="Path 3213" d="M505.497 267.663H372.366c0 147.055 119.208 266.263 266.262 266.263V267.663" stroke-miterlimit="10"/><path data-name="Line 264" stroke-linecap="round" stroke-linejoin="round" d="m985.175 3.356 129.922 129.922"/><path data-name="Path 3214" d="M984.475 135.787h130.619v130.621Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3215" d="M984.475 268.919h130.619V399.54Z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>':"shape-2"===e.svg_shape?o='<svg xmlns="http://www.w3.org/2000/svg" class="qodef-svg-shape-2" width="1116.511" height="801.829" viewBox="0 0 1116.511 801.829"><g fill="none" stroke="currentColor" stroke-width="2" data-name="Group 3623" opacity=".264"><path data-name="Rectangle 542" stroke-miterlimit="10" d="M1115.511 1.642v266.262H849.249V1.642z"/><path data-name="Line 260" stroke-miterlimit="10" d="M133.291 534.165V267.903"/><path data-name="Line 261" stroke-miterlimit="10" d="M133.291 801.83V534.166"/><path data-name="Line 262" stroke-miterlimit="10" d="M.16 534.166h1.254"/><path data-name="Path 3201" d="M811.989 402.316v130.567h130.572Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3202" d="M811.352 269.185v130.569h130.569Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Line 263" stroke-miterlimit="10" d="M477.883 600.732v-66.566"/><path data-name="Path 3203" d="M362.563 600.731H211.62v-66.566h133.131" stroke-miterlimit="10"/><path data-name="Path 3204" d="M477.883 600.731v66.566H211.621v-66.566h150.942" stroke-miterlimit="10"/><path data-name="Path 3205" d="M810.711 467.601v-199.7h-66.566v532.525h66.566v-199.7" stroke-miterlimit="10"/><path data-name="Rectangle 543" stroke-miterlimit="10" d="M133.29 1.641h66.566v266.262H133.29z"/><path data-name="Path 3206" d="M266.422 201.339V1.639h-66.566v266.263h66.566" stroke-miterlimit="10"/><path data-name="Path 3207" d="M266.421 267.904h66.566V1.641h-66.566v199.7" stroke-miterlimit="10"/><path data-name="Rectangle 544" stroke-miterlimit="10" d="M849.249 1.642v66.566H477.883V1.642z"/><path data-name="Rectangle 545" stroke-miterlimit="10" d="M849.249 68.207v66.566H477.883V68.207z"/><path data-name="Rectangle 546" stroke-miterlimit="10" d="M849.249 134.773v66.566H477.883v-66.566z"/><path data-name="Rectangle 547" stroke-miterlimit="10" d="M849.249 201.338v66.566H477.883v-66.566z"/><path data-name="Rectangle 548" stroke-miterlimit="10" d="M477.883 667.297v66.566H211.621v-66.566z"/><path data-name="Rectangle 549" stroke-miterlimit="10" d="M941.921 532.911h173.59v266.262h-173.59z"/><path data-name="Rectangle 550" stroke-miterlimit="10" d="M477.883 733.862v66.566H211.621v-66.566z"/><path data-name="Path 5140" d="M1115.511 134.773A133.131 133.131 0 1 1 982.38 1.642a133.131 133.131 0 0 1 133.131 133.131Z"/><path data-name="Path 5141" d="M611.014 534.166a133.131 133.131 0 1 1-133.131-133.131 133.131 133.131 0 0 1 133.131 133.131Z"/><path data-name="Path 5139" d="M332.986 267.904a66.566 66.566 0 1 1-66.566-66.566 66.566 66.566 0 0 1 66.566 66.566Z"/><path data-name="Path 3208" d="M877.276 534.166A66.566 66.566 0 1 1 810.71 467.6" stroke-miterlimit="10"/><path data-name="Path 3209" d="M477.883 268.544V1c-80.024 0-144.9 59.892-144.9 133.772s64.876 133.772 144.9 133.772Z" stroke-miterlimit="10"/><path data-name="Path 3210" d="M477.883 534.165v266.263H211.621V534.165h133.131" stroke-miterlimit="10"/><path data-name="Path 3211" d="M611.014 534.165h133.131c0 147.055-119.208 266.263-266.262 266.263V534.165" stroke-miterlimit="10"/><path data-name="Path 3212" d="M211.621 534.166c0-147.055 119.208-266.263 266.262-266.263v266.263Z" stroke-miterlimit="10"/><path data-name="Path 3213" d="M611.014 534.166h133.131c0-147.055-119.208-266.263-266.262-266.263v266.263" stroke-miterlimit="10"/><path data-name="Line 264" stroke-linecap="round" stroke-linejoin="round" d="M131.336 798.473 1.414 668.551"/><path data-name="Path 3214" d="M132.036 666.042H1.417V535.421Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3215" d="M132.036 532.91H1.417V402.289Z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>':"shape-3"===e.svg_shape&&(o='<svg xmlns="http://www.w3.org/2000/svg" class="qodef-svg-shape-3" width="801.829" height="1116.511" viewBox="0 0 801.829 1116.511"><g fill="none" stroke="#ac835d" stroke-width="2" data-name="Group 539" opacity=".264"><path data-name="Rectangle 542" stroke-miterlimit="10" d="M1.642 1h266.262v266.262H1.642z"/><path data-name="Line 260" stroke-miterlimit="10" d="M534.165 983.22H267.903"/><path data-name="Line 261" stroke-miterlimit="10" d="M801.83 983.22H534.166"/><path data-name="Line 262" stroke-miterlimit="10" d="M534.166 1116.351v-1.254"/><path data-name="Path 3201" d="M402.316 304.522h130.567V173.95Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3202" d="M269.185 305.159h130.569V174.59Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Line 263" stroke-miterlimit="10" d="M600.732 638.628h-66.566"/><path data-name="Path 3203" d="M600.731 753.948v150.943h-66.566V771.76" stroke-miterlimit="10"/><path data-name="Path 3204" d="M600.731 638.628h66.566V904.89h-66.566V753.948" stroke-miterlimit="10"/><path data-name="Path 3205" d="M467.601 305.8h-199.7v66.566h532.525V305.8h-199.7" stroke-miterlimit="10"/><path data-name="Rectangle 543" stroke-miterlimit="10" d="M1.641 983.221v-66.566h266.262v66.566z"/><path data-name="Path 3206" d="M201.339 850.089H1.639v66.566h266.263v-66.566" stroke-miterlimit="10"/><path data-name="Path 3207" d="M267.904 850.09v-66.566H1.641v66.566h199.7" stroke-miterlimit="10"/><path data-name="Rectangle 544" stroke-miterlimit="10" d="M1.642 267.262h66.566v371.366H1.642z"/><path data-name="Rectangle 545" stroke-miterlimit="10" d="M68.207 267.262h66.566v371.366H68.207z"/><path data-name="Rectangle 546" stroke-miterlimit="10" d="M134.773 267.262h66.566v371.366h-66.566z"/><path data-name="Rectangle 547" stroke-miterlimit="10" d="M201.338 267.262h66.566v371.366h-66.566z"/><path data-name="Rectangle 548" stroke-miterlimit="10" d="M667.297 638.628h66.566V904.89h-66.566z"/><path data-name="Rectangle 549" stroke-miterlimit="10" d="M532.911 174.59V1h266.262v173.59z"/><path data-name="Rectangle 550" stroke-miterlimit="10" d="M733.862 638.628h66.566V904.89h-66.566z"/><path data-name="Path 5140" d="M134.773 1A133.131 133.131 0 1 1 1.642 134.131 133.131 133.131 0 0 1 134.773 1Z"/><path data-name="Path 5139" d="M534.166 505.497a133.131 133.131 0 1 1-133.131 133.131 133.131 133.131 0 0 1 133.131-133.131Z"/><path data-name="Path 5141" d="M267.904 783.525a66.566 66.566 0 1 1-66.566 66.566 66.566 66.566 0 0 1 66.566-66.566Z"/><path data-name="Path 3208" d="M534.166 239.235a66.566 66.566 0 1 1-66.566 66.566" stroke-miterlimit="10"/><path data-name="Path 3209" d="M268.544 638.628H1c0 80.024 59.892 144.9 133.772 144.9s133.772-64.876 133.772-144.9Z" stroke-miterlimit="10"/><path data-name="Path 3210" d="M534.165 638.628h266.263V904.89H534.165V771.759" stroke-miterlimit="10"/><path data-name="Path 3211" d="M534.165 505.497V372.366c147.055 0 266.263 119.208 266.263 266.262H534.165" stroke-miterlimit="10"/><path data-name="Path 3212" d="M534.166 904.89c-147.055 0-266.263-119.208-266.263-266.262h266.263Z" stroke-miterlimit="10"/><path data-name="Path 3213" d="M534.166 505.497V372.366c-147.055 0-266.263 119.208-266.263 266.262h266.263" stroke-miterlimit="10"/><path data-name="Line 264" stroke-linecap="round" stroke-linejoin="round" d="m798.473 985.175-129.922 129.922"/><path data-name="Path 3214" d="M666.042 984.475v130.619H535.421Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3215" d="M532.91 984.475v130.619H402.289Z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'),t.addClass("qodef-svg-shape"),r('<div class="qodef-e-svg-element" data-viewport-offset="'+e.svg_line_animation_appear_percentage+'" data-drawing-animation="'+e.svg_line_drawing_animation+'" style="position: absolute; z-index: 0; color:'+e.svg_shape_color+";"+e.svg_vertical_anchor+":"+e.svg_vertical_position+";"+e.svg_horizontal_anchor+":"+e.svg_horizontal_position+'">'+o+"</div>").prependTo(t),document.body.classList.contains("elementor-editor-active")&&qodefCore.qodefSectionSvgBgAnimation.init()),void 0!==e.enable_svg_two&&"svg"===e.enable_svg_two&&void 0!==e.svg_shape_two&&(r(".qodef-e-svg-element.qodef-two",t).remove(),t.removeClass("qodef-svg-shape-two"),o="","shape-1"===e.svg_shape_two?o='<svg xmlns="http://www.w3.org/2000/svg" class="qodef-svg-shape-1" width="1116.511" height="801.828" viewBox="0 0 1116.511 801.828"><g fill="none" stroke="currentColor" stroke-width="2" data-name="Group 548" opacity=".264"><path data-name="Rectangle 542" stroke-miterlimit="10" d="M1 800.187V533.925h266.262v266.262z"/><path data-name="Line 260" stroke-miterlimit="10" d="M983.22 267.664v266.262"/><path data-name="Line 261" stroke-miterlimit="10" d="M983.22-.001v267.664"/><path data-name="Line 262" stroke-miterlimit="10" d="M1116.351 267.663h-1.254"/><path data-name="Path 3201" d="M304.522 399.513V268.946H173.95Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3202" d="M305.159 532.644V402.075H174.59Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Line 263" stroke-miterlimit="10" d="M638.628 201.097v66.566"/><path data-name="Path 3203" d="M753.948 201.098h150.943v66.566H771.76" stroke-miterlimit="10"/><path data-name="Path 3204" d="M638.628 201.098v-66.566H904.89v66.566H753.948" stroke-miterlimit="10"/><path data-name="Path 3205" d="M305.8 334.228v199.7h66.566V1.403H305.8v199.7" stroke-miterlimit="10"/><path data-name="Rectangle 543" stroke-miterlimit="10" d="M983.221 800.188h-66.566V533.926h66.566z"/><path data-name="Path 3206" d="M850.089 600.49v199.7h66.566V533.927h-66.566" stroke-miterlimit="10"/><path data-name="Path 3207" d="M850.09 533.925h-66.566v266.263h66.566v-199.7" stroke-miterlimit="10"/><path data-name="Rectangle 544" stroke-miterlimit="10" d="M267.262 800.187v-66.566h371.366v66.566z"/><path data-name="Rectangle 545" stroke-miterlimit="10" d="M267.262 733.622v-66.566h371.366v66.566z"/><path data-name="Rectangle 546" stroke-miterlimit="10" d="M267.262 667.056V600.49h371.366v66.566z"/><path data-name="Rectangle 547" stroke-miterlimit="10" d="M267.262 600.491v-66.566h371.366v66.566z"/><path data-name="Rectangle 548" stroke-miterlimit="10" d="M638.628 134.532V67.966H904.89v66.566z"/><path data-name="Rectangle 549" stroke-miterlimit="10" d="M174.59 268.918H1V2.656h173.59z"/><path data-name="Rectangle 550" stroke-miterlimit="10" d="M638.628 67.967V1.401H904.89v66.566z"/><path data-name="Path 5141" d="M1 667.056a133.131 133.131 0 1 1 133.131 133.131A133.131 133.131 0 0 1 1 667.056Z"/><path data-name="Path 5139" d="M505.497 267.663a133.131 133.131 0 1 1 133.131 133.131 133.131 133.131 0 0 1-133.131-133.131Z"/><path data-name="Path 5140" d="M783.525 533.925a66.566 66.566 0 1 1 66.566 66.566 66.566 66.566 0 0 1-66.566-66.566Z"/><path data-name="Path 3208" d="M239.235 267.663a66.566 66.566 0 1 1 66.566 66.566" stroke-miterlimit="10"/><path data-name="Path 3209" d="M638.628 533.285v267.544c80.024 0 144.9-59.892 144.9-133.772s-64.876-133.772-144.9-133.772Z" stroke-miterlimit="10"/><path data-name="Path 3210" d="M638.628 267.664V1.401H904.89v266.263H771.759" stroke-miterlimit="10"/><path data-name="Path 3211" d="M505.497 267.664H372.366c0-147.055 119.208-266.263 266.262-266.263v266.263" stroke-miterlimit="10"/><path data-name="Path 3212" d="M904.89 267.663c0 147.055-119.208 266.263-266.262 266.263V267.663Z" stroke-miterlimit="10"/><path data-name="Path 3213" d="M505.497 267.663H372.366c0 147.055 119.208 266.263 266.262 266.263V267.663" stroke-miterlimit="10"/><path data-name="Line 264" stroke-linecap="round" stroke-linejoin="round" d="m985.175 3.356 129.922 129.922"/><path data-name="Path 3214" d="M984.475 135.787h130.619v130.621Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3215" d="M984.475 268.919h130.619V399.54Z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>':"shape-2"===e.svg_shape_two?o='<svg xmlns="http://www.w3.org/2000/svg" class="qodef-svg-shape-2" width="1116.511" height="801.829" viewBox="0 0 1116.511 801.829"><g fill="none" stroke="currentColor" stroke-width="2" data-name="Group 3623" opacity=".264"><path data-name="Rectangle 542" stroke-miterlimit="10" d="M1115.511 1.642v266.262H849.249V1.642z"/><path data-name="Line 260" stroke-miterlimit="10" d="M133.291 534.165V267.903"/><path data-name="Line 261" stroke-miterlimit="10" d="M133.291 801.83V534.166"/><path data-name="Line 262" stroke-miterlimit="10" d="M.16 534.166h1.254"/><path data-name="Path 3201" d="M811.989 402.316v130.567h130.572Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3202" d="M811.352 269.185v130.569h130.569Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Line 263" stroke-miterlimit="10" d="M477.883 600.732v-66.566"/><path data-name="Path 3203" d="M362.563 600.731H211.62v-66.566h133.131" stroke-miterlimit="10"/><path data-name="Path 3204" d="M477.883 600.731v66.566H211.621v-66.566h150.942" stroke-miterlimit="10"/><path data-name="Path 3205" d="M810.711 467.601v-199.7h-66.566v532.525h66.566v-199.7" stroke-miterlimit="10"/><path data-name="Rectangle 543" stroke-miterlimit="10" d="M133.29 1.641h66.566v266.262H133.29z"/><path data-name="Path 3206" d="M266.422 201.339V1.639h-66.566v266.263h66.566" stroke-miterlimit="10"/><path data-name="Path 3207" d="M266.421 267.904h66.566V1.641h-66.566v199.7" stroke-miterlimit="10"/><path data-name="Rectangle 544" stroke-miterlimit="10" d="M849.249 1.642v66.566H477.883V1.642z"/><path data-name="Rectangle 545" stroke-miterlimit="10" d="M849.249 68.207v66.566H477.883V68.207z"/><path data-name="Rectangle 546" stroke-miterlimit="10" d="M849.249 134.773v66.566H477.883v-66.566z"/><path data-name="Rectangle 547" stroke-miterlimit="10" d="M849.249 201.338v66.566H477.883v-66.566z"/><path data-name="Rectangle 548" stroke-miterlimit="10" d="M477.883 667.297v66.566H211.621v-66.566z"/><path data-name="Rectangle 549" stroke-miterlimit="10" d="M941.921 532.911h173.59v266.262h-173.59z"/><path data-name="Rectangle 550" stroke-miterlimit="10" d="M477.883 733.862v66.566H211.621v-66.566z"/><path data-name="Path 5140" d="M1115.511 134.773A133.131 133.131 0 1 1 982.38 1.642a133.131 133.131 0 0 1 133.131 133.131Z"/><path data-name="Path 5141" d="M611.014 534.166a133.131 133.131 0 1 1-133.131-133.131 133.131 133.131 0 0 1 133.131 133.131Z"/><path data-name="Path 5139" d="M332.986 267.904a66.566 66.566 0 1 1-66.566-66.566 66.566 66.566 0 0 1 66.566 66.566Z"/><path data-name="Path 3208" d="M877.276 534.166A66.566 66.566 0 1 1 810.71 467.6" stroke-miterlimit="10"/><path data-name="Path 3209" d="M477.883 268.544V1c-80.024 0-144.9 59.892-144.9 133.772s64.876 133.772 144.9 133.772Z" stroke-miterlimit="10"/><path data-name="Path 3210" d="M477.883 534.165v266.263H211.621V534.165h133.131" stroke-miterlimit="10"/><path data-name="Path 3211" d="M611.014 534.165h133.131c0 147.055-119.208 266.263-266.262 266.263V534.165" stroke-miterlimit="10"/><path data-name="Path 3212" d="M211.621 534.166c0-147.055 119.208-266.263 266.262-266.263v266.263Z" stroke-miterlimit="10"/><path data-name="Path 3213" d="M611.014 534.166h133.131c0-147.055-119.208-266.263-266.262-266.263v266.263" stroke-miterlimit="10"/><path data-name="Line 264" stroke-linecap="round" stroke-linejoin="round" d="M131.336 798.473 1.414 668.551"/><path data-name="Path 3214" d="M132.036 666.042H1.417V535.421Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3215" d="M132.036 532.91H1.417V402.289Z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>':"shape-3"===e.svg_shape_two&&(o='<svg xmlns="http://www.w3.org/2000/svg" class="qodef-svg-shape-3" width="801.829" height="1116.511" viewBox="0 0 801.829 1116.511"><g fill="none" stroke="#ac835d" stroke-width="2" data-name="Group 539" opacity=".264"><path data-name="Rectangle 542" stroke-miterlimit="10" d="M1.642 1h266.262v266.262H1.642z"/><path data-name="Line 260" stroke-miterlimit="10" d="M534.165 983.22H267.903"/><path data-name="Line 261" stroke-miterlimit="10" d="M801.83 983.22H534.166"/><path data-name="Line 262" stroke-miterlimit="10" d="M534.166 1116.351v-1.254"/><path data-name="Path 3201" d="M402.316 304.522h130.567V173.95Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3202" d="M269.185 305.159h130.569V174.59Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Line 263" stroke-miterlimit="10" d="M600.732 638.628h-66.566"/><path data-name="Path 3203" d="M600.731 753.948v150.943h-66.566V771.76" stroke-miterlimit="10"/><path data-name="Path 3204" d="M600.731 638.628h66.566V904.89h-66.566V753.948" stroke-miterlimit="10"/><path data-name="Path 3205" d="M467.601 305.8h-199.7v66.566h532.525V305.8h-199.7" stroke-miterlimit="10"/><path data-name="Rectangle 543" stroke-miterlimit="10" d="M1.641 983.221v-66.566h266.262v66.566z"/><path data-name="Path 3206" d="M201.339 850.089H1.639v66.566h266.263v-66.566" stroke-miterlimit="10"/><path data-name="Path 3207" d="M267.904 850.09v-66.566H1.641v66.566h199.7" stroke-miterlimit="10"/><path data-name="Rectangle 544" stroke-miterlimit="10" d="M1.642 267.262h66.566v371.366H1.642z"/><path data-name="Rectangle 545" stroke-miterlimit="10" d="M68.207 267.262h66.566v371.366H68.207z"/><path data-name="Rectangle 546" stroke-miterlimit="10" d="M134.773 267.262h66.566v371.366h-66.566z"/><path data-name="Rectangle 547" stroke-miterlimit="10" d="M201.338 267.262h66.566v371.366h-66.566z"/><path data-name="Rectangle 548" stroke-miterlimit="10" d="M667.297 638.628h66.566V904.89h-66.566z"/><path data-name="Rectangle 549" stroke-miterlimit="10" d="M532.911 174.59V1h266.262v173.59z"/><path data-name="Rectangle 550" stroke-miterlimit="10" d="M733.862 638.628h66.566V904.89h-66.566z"/><path data-name="Path 5140" d="M134.773 1A133.131 133.131 0 1 1 1.642 134.131 133.131 133.131 0 0 1 134.773 1Z"/><path data-name="Path 5139" d="M534.166 505.497a133.131 133.131 0 1 1-133.131 133.131 133.131 133.131 0 0 1 133.131-133.131Z"/><path data-name="Path 5141" d="M267.904 783.525a66.566 66.566 0 1 1-66.566 66.566 66.566 66.566 0 0 1 66.566-66.566Z"/><path data-name="Path 3208" d="M534.166 239.235a66.566 66.566 0 1 1-66.566 66.566" stroke-miterlimit="10"/><path data-name="Path 3209" d="M268.544 638.628H1c0 80.024 59.892 144.9 133.772 144.9s133.772-64.876 133.772-144.9Z" stroke-miterlimit="10"/><path data-name="Path 3210" d="M534.165 638.628h266.263V904.89H534.165V771.759" stroke-miterlimit="10"/><path data-name="Path 3211" d="M534.165 505.497V372.366c147.055 0 266.263 119.208 266.263 266.262H534.165" stroke-miterlimit="10"/><path data-name="Path 3212" d="M534.166 904.89c-147.055 0-266.263-119.208-266.263-266.262h266.263Z" stroke-miterlimit="10"/><path data-name="Path 3213" d="M534.166 505.497V372.366c-147.055 0-266.263 119.208-266.263 266.262h266.263" stroke-miterlimit="10"/><path data-name="Line 264" stroke-linecap="round" stroke-linejoin="round" d="m798.473 985.175-129.922 129.922"/><path data-name="Path 3214" d="M666.042 984.475v130.619H535.421Z" stroke-linecap="round" stroke-linejoin="round"/><path data-name="Path 3215" d="M532.91 984.475v130.619H402.289Z" stroke-linecap="round" stroke-linejoin="round"/></g></svg>'),t.addClass("qodef-svg-shape-two"),r('<div class="qodef-e-svg-element qodef-two" data-viewport-offset="'+e.svg_line_animation_appear_percentage_two+'" data-drawing-animation="'+e.svg_line_drawing_animation_two+'" style="position: absolute; z-index: 0; color:'+e.svg_shape_color_two+";"+e.svg_vertical_anchor_two+":"+e.svg_vertical_position_two+";"+e.svg_horizontal_anchor_two+":"+e.svg_horizontal_position_two+'">'+o+"</div>").prependTo(t),document.body.classList.contains("elementor-editor-active")&&qodefCore.qodefSectionSvgBgAnimation.init())}},e={init:function(){elementorFrontend.hooks.addAction("frontend/element_ready/column",d.init)}},d={init:function(t){var a=t,e=Boolean(elementorFrontend.isEditMode()),o=[],i={};if(e&&void 0!==t){var e=window.elementor.elements,n=a.data("id");if(!e.models)return!1;r.each(e.models,function(t,e){r.each(e.attributes.elements.models,function(t,e){n==e.id&&(i=e.attributes.settings.attributes)})}),void 0!==i.qodef_background_text_enable&&i.qodef_background_text_enable.length&&(o.background_text_enable=i.qodef_background_text_enable),void 0!==i.qodef_background_text&&i.qodef_background_text.length&&(o.background_text=i.qodef_background_text),void 0!==i.qodef_background_text_color&&i.qodef_background_text_color.length&&(o.background_text_color=i.qodef_background_text_color),void 0!==i.qodef_background_text_size&&i.qodef_background_text_size.length&&(o.background_text_size=i.qodef_background_text_size),void 0!==i.qodef_background_text_size_1440&&i.qodef_background_text_size_1440.length&&(o.background_text_size_1440=i.qodef_background_text_size_1440),void 0!==i.qodef_background_text_size_1366&&i.qodef_background_text_size_1366.length&&(o.background_text_size_1366=i.qodef_background_text_size_1366),void 0!==i.qodef_background_text_size_1024&&i.qodef_background_text_size_1024.length&&(o.background_text_size_1024=i.qodef_background_text_size_1024),void 0!==i.qodef_background_text_vertical_offset&&i.qodef_background_text_vertical_offset.length&&(o.background_text_vertical_offset=i.qodef_background_text_vertical_offset),void 0!==i.qodef_background_text_vertical_offset_1440&&i.qodef_background_text_vertical_offset_1440.length&&(o.background_text_vertical_offset_1440=i.qodef_background_text_vertical_offset_1440),void 0!==i.qodef_background_text_vertical_offset_1366&&i.qodef_background_text_vertical_offset_1366.length&&(o.background_text_vertical_offset_1366=i.qodef_background_text_vertical_offset_1366),void 0!==i.qodef_background_text_vertical_offset_1024&&i.qodef_background_text_vertical_offset_1024.length&&(o.background_text_vertical_offset_1024=i.qodef_background_text_vertical_offset_1024),void 0!==i.qodef_background_text_horizontal_align&&i.qodef_background_text_horizontal_align.length&&(o.background_text_horizontal_align=i.qodef_background_text_horizontal_align),void 0!==i.qodef_background_text_vertical_align&&i.qodef_background_text_vertical_align.length&&(o.background_text_vertical_align=i.qodef_background_text_vertical_align)}else{t=qodefElementorGlobal.vars.elementorColumnHandler;r.each(t,function(t,e){a=r('[data-id="'+t+'"]'),o.background_text=e[0],o.background_text_color=e[1],o.background_text_size=e[2],o.background_text_size_1440=e[3],o.background_text_size_1366=e[4],o.background_text_size_1024=e[5],o.background_text_vertical_offset=e[6],o.background_text_vertical_offset_1440=e[7],o.background_text_vertical_offset_1366=e[8],o.background_text_vertical_offset_1024=e[9],o.background_text_horizontal_align=e[10],o.background_text_vertical_align=e[11],void 0!==o.background_text&&(o.background_text_enable="yes"),void 0!==a&&a.length&&d.generateOutput(a,o)})}void 0!==a&&d.generateOutput(a,o)},generateOutput:function(t,e){void 0!==e.background_text_enable&&"yes"==e.background_text_enable&&void 0!==e.background_text&&(r(".qodef-m-background-text-holder",t).remove(),t.removeClass("qodef-background-text"),t.addClass("qodef-background-text"),r('<div class="qodef-m-background-text-holder"><span class="qodef-m-background-text">'+e.background_text+"</span></div>").prependTo(t),t.find(".qodef-m-background-text").css({color:e.background_text_color}),t.find(".qodef-m-background-text-holder").css({"justify-content":e.background_text_horizontal_align,"align-items":e.background_text_vertical_align}),t.find(".qodef-m-background-text").attr("data-size-3840",e.background_text_size),t.find(".qodef-m-background-text").attr("data-size-1440",e.background_text_size_1440),t.find(".qodef-m-background-text").attr("data-size-1366",e.background_text_size_1366),t.find(".qodef-m-background-text").attr("data-size-1024",e.background_text_size_1024),t.find(".qodef-m-background-text").attr("data-vertical-offset-3840",e.background_text_vertical_offset),t.find(".qodef-m-background-text").attr("data-vertical-offset-1440",e.background_text_vertical_offset_1440),t.find(".qodef-m-background-text").attr("data-vertical-offset-1366",e.background_text_vertical_offset_1366),t.find(".qodef-m-background-text").attr("data-vertical-offset-1024",e.background_text_vertical_offset_1024),qodefBackgroundText.init())}}}(jQuery);