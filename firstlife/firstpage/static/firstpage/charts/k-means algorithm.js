(function() {
          var fn = function() {
            Bokeh.safely(function() {
              var render_items = [{"docid":"180dd5f7-3268-4bb8-a824-639e13e68735","elementid":"0e6010cc-85ba-4290-bf22-f682466db74b","modelid":"95e040a4-e6b2-42d5-9d47-f26c5fbac9c8"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();