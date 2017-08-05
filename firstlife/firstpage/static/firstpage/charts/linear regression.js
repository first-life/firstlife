(function() {
  var fn = function() {
    Bokeh.safely(function() {
      var docs_json = {
        "a3835b77-5309-4f56-b60a-49301dad78ad": {
          "roots": {
            "references": [{
              "attributes": {},
              "id": "ae8a1a6d-b78e-4c7d-9ec9-6d619f659a15",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "ac538fce-5f15-4a2f-a0ee-49f951feada4",
              "type": "ResetTool"
            }, {
              "attributes": {},
              "id": "f6361472-19a3-4394-a408-f83be53f8864",
              "type": "LinearScale"
            }, {
              "attributes": {
                "bottom_units": "screen",
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "lightgrey"
                },
                "left_units": "screen",
                "level": "overlay",
                "line_alpha": {
                  "value": 1.0
                },
                "line_color": {
                  "value": "black"
                },
                "line_dash": [4, 4],
                "line_width": {
                  "value": 2
                },
                "plot": null,
                "render_mode": "css",
                "right_units": "screen",
                "top_units": "screen"
              },
              "id": "6d323478-0525-4c8d-ba0f-22b740c112a7",
              "type": "BoxAnnotation"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "8183b86a-2eb0-4e70-aa69-94299cbd6c6d",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "307a6fd0-3549-4414-bf4a-57eb1a134484",
              "type": "WheelZoomTool"
            }, {
              "attributes": {
                "overlay": {
                  "id": "d7ecb9f0-8b0d-449a-8ea4-34c6266c0b76",
                  "type": "BoxAnnotation"
                },
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "5c3999aa-48f7-4842-9074-424f15440e36",
              "type": "BoxZoomTool"
            }, {
              "attributes": {
                "dimension": 1,
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "17ddcf40-92d7-44af-9137-07249fcc8afc",
                  "type": "BasicTicker"
                }
              },
              "id": "575bf496-5601-4618-b43a-5739175ca9c7",
              "type": "Grid"
            }, {
              "attributes": {
                "bottom_units": "screen",
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "lightgrey"
                },
                "left_units": "screen",
                "level": "overlay",
                "line_alpha": {
                  "value": 1.0
                },
                "line_color": {
                  "value": "black"
                },
                "line_dash": [4, 4],
                "line_width": {
                  "value": 2
                },
                "plot": null,
                "render_mode": "css",
                "right_units": "screen",
                "top_units": "screen"
              },
              "id": "6472f13e-fb9c-43c9-9f2b-8562fbf0a82a",
              "type": "BoxAnnotation"
            }, {
              "attributes": {
                "data_source": {
                  "id": "676b9ca8-af6c-4c14-912d-d2614ba8e3d5",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "1499d5a7-06ad-4dd8-b3cd-18d71f5b42f1",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "2e34261a-5667-476d-8af9-49c2315a1500",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "b9eb8c7d-74b8-4ad9-95d2-0af6461051a8",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "7461e2bb-4a32-48ff-ad38-3debc7db8488",
              "type": "HelpTool"
            }, {
              "attributes": {},
              "id": "59e99788-d4a7-4cfc-803e-92070efe4883",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "overlay": {
                  "id": "6b0c024f-d5a2-4eb6-aa15-8b3e05fc768d",
                  "type": "BoxAnnotation"
                },
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "b292b53f-fb6a-4ef8-a84f-dda94fad7260",
              "type": "BoxZoomTool"
            }, {
              "attributes": {
                "active_drag": "auto",
                "active_inspect": "auto",
                "active_scroll": "auto",
                "active_tap": "auto",
                "logo": null,
                "tools": [{
                  "id": "2a9cfab7-7df1-4961-a908-9154da2b5c1f",
                  "type": "PanTool"
                }, {
                  "id": "e808a372-788d-46de-a240-9fe5ba1a4a7d",
                  "type": "WheelZoomTool"
                }, {
                  "id": "192d5afd-2fa9-49f7-a006-49cc31011af9",
                  "type": "BoxZoomTool"
                }, {
                  "id": "2cda395d-2251-4174-a1d8-42b3434f175d",
                  "type": "SaveTool"
                }, {
                  "id": "ac538fce-5f15-4a2f-a0ee-49f951feada4",
                  "type": "ResetTool"
                }, {
                  "id": "7461e2bb-4a32-48ff-ad38-3debc7db8488",
                  "type": "HelpTool"
                }]
              },
              "id": "3b44c26f-72ea-4ceb-819b-3c7b076e2e75",
              "type": "Toolbar"
            }, {
              "attributes": {},
              "id": "8c8b9086-23c9-4bfd-80ad-16d6bf7c0f4a",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "axis_label": "sepal-width",
                "axis_label_standoff": 30,
                "formatter": {
                  "id": "52c00842-2bcf-4468-8cd2-58d7b93a366b",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "3fa03d99-8a7e-45dd-ad79-b6eee71ae9c9",
                  "type": "BasicTicker"
                }
              },
              "id": "9c7bfd45-0f84-4e68-9f72-f6f9c4f70fd5",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "5ccdedbb-305e-40ab-9bca-c850da4818ac",
              "type": "WheelZoomTool"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "f433b0b9-d344-49a8-a6ed-3caeaf7f5723",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "89939438-e8d4-47aa-ac3f-30daa3fb6b66",
              "type": "ResetTool"
            }, {
              "attributes": {
                "align": "center",
                "plot": null,
                "text": "Iris data",
                "text_font_size": {
                  "value": "25px"
                }
              },
              "id": "cf2e6242-cbcf-4391-8939-fb881dc3919a",
              "type": "Title"
            }, {
              "attributes": {
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "3529d5a9-9bc2-41a7-b3d0-d7f008dec0df",
              "type": "PanTool"
            }, {
              "attributes": {
                "dimension": 1,
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "2c997969-c76c-48a9-9087-ed9e3c8c6b42",
                  "type": "BasicTicker"
                }
              },
              "id": "2c42ff7e-1228-4041-aa07-3c0e7a6170a6",
              "type": "Grid"
            }, {
              "attributes": {
                "below": [{
                  "id": "9c7bfd45-0f84-4e68-9f72-f6f9c4f70fd5",
                  "type": "LinearAxis"
                }],
                "left": [{
                  "id": "61558347-0d67-4f7e-a212-999bc07aa8d7",
                  "type": "LinearAxis"
                }],
                "renderers": [{
                  "id": "9c7bfd45-0f84-4e68-9f72-f6f9c4f70fd5",
                  "type": "LinearAxis"
                }, {
                  "id": "65e6a0b9-824b-4e42-87cb-394aea51f448",
                  "type": "Grid"
                }, {
                  "id": "61558347-0d67-4f7e-a212-999bc07aa8d7",
                  "type": "LinearAxis"
                }, {
                  "id": "760869bb-48fb-44f3-8732-7bd946d09300",
                  "type": "Grid"
                }, {
                  "id": "6d323478-0525-4c8d-ba0f-22b740c112a7",
                  "type": "BoxAnnotation"
                }, {
                  "id": "fc192fc0-63dd-48d0-9706-74cf27cc7698",
                  "type": "GlyphRenderer"
                }, {
                  "id": "95aa0cca-51b9-4bdb-b14a-f790ac1c47b8",
                  "type": "GlyphRenderer"
                }],
                "title": {
                  "id": "e4188025-c76f-4d15-b2d2-e7b6910a0b81",
                  "type": "Title"
                },
                "tool_events": {
                  "id": "e848d41c-1aad-412d-851f-937141fcdb68",
                  "type": "ToolEvents"
                },
                "toolbar": {
                  "id": "ca37b8cf-4455-4fad-a1b5-1396ecec67f3",
                  "type": "Toolbar"
                },
                "x_range": {
                  "id": "065fbe32-4cc4-4944-95ee-87a8d941e764",
                  "type": "DataRange1d"
                },
                "x_scale": {
                  "id": "040053c1-470d-4dfa-9752-da1ce32ca9c5",
                  "type": "LinearScale"
                },
                "y_range": {
                  "id": "9fe28bd9-828e-4128-b6b5-6cd11065b1ef",
                  "type": "DataRange1d"
                },
                "y_scale": {
                  "id": "06bfc731-ae20-4104-831c-3dd28dfce222",
                  "type": "LinearScale"
                }
              },
              "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
              "subtype": "Figure",
              "type": "Plot"
            }, {
              "attributes": {
                "axis_label": "sepal-width",
                "axis_label_standoff": 30,
                "formatter": {
                  "id": "b0e2bb11-6133-449e-80bf-7e1c43415bed",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "718a46bf-74e4-40e6-ae80-2e2036bddd17",
                  "type": "BasicTicker"
                }
              },
              "id": "1c1a049b-4759-40df-a8bd-38d4add9c11c",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "active_drag": "auto",
                "active_inspect": "auto",
                "active_scroll": "auto",
                "active_tap": "auto",
                "logo": null,
                "tools": [{
                  "id": "8fc60530-6afd-4877-b2c8-fafabbc8f53d",
                  "type": "PanTool"
                }, {
                  "id": "5ccdedbb-305e-40ab-9bca-c850da4818ac",
                  "type": "WheelZoomTool"
                }, {
                  "id": "66e0597b-9cb7-4023-af60-6b6a0764130d",
                  "type": "BoxZoomTool"
                }, {
                  "id": "398cb2ec-20b1-474e-9da1-1a356047c92e",
                  "type": "SaveTool"
                }, {
                  "id": "89939438-e8d4-47aa-ac3f-30daa3fb6b66",
                  "type": "ResetTool"
                }, {
                  "id": "fd729fbd-6c12-482a-94a8-c31c6e465126",
                  "type": "HelpTool"
                }]
              },
              "id": "4b12e786-f884-41f2-a68e-ac5d4b66ebe6",
              "type": "Toolbar"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "red"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "27d7adfb-e390-4022-a344-8b35b66f2be5",
              "type": "Circle"
            }, {
              "attributes": {
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "a025f51a-a035-46a7-b965-38521fbaef53",
                  "type": "BasicTicker"
                }
              },
              "id": "3d3976b1-5a14-42e8-832e-bfecc4f906c1",
              "type": "Grid"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "bc9b84b6-f3da-4d03-89aa-543381944ead",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "active_drag": "auto",
                "active_inspect": "auto",
                "active_scroll": "auto",
                "active_tap": "auto",
                "tools": [{
                  "id": "de4896a9-ec31-444a-912d-0f18ca386095",
                  "type": "PanTool"
                }, {
                  "id": "307a6fd0-3549-4414-bf4a-57eb1a134484",
                  "type": "WheelZoomTool"
                }, {
                  "id": "504b397a-f385-4ec8-8400-155e90c74749",
                  "type": "BoxZoomTool"
                }, {
                  "id": "507b36cf-b582-4ed3-bc33-23187f6a11b5",
                  "type": "SaveTool"
                }, {
                  "id": "e8c9e571-30f0-47b2-892d-4c76718e4cd8",
                  "type": "ResetTool"
                }, {
                  "id": "ca2b4b28-8282-4b78-abd9-c4e1de3c2efe",
                  "type": "HelpTool"
                }]
              },
              "id": "ca37b8cf-4455-4fad-a1b5-1396ecec67f3",
              "type": "Toolbar"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "8a739f36-3a55-4469-ae2b-5e6b87fa89f0",
              "type": "Circle"
            }, {
              "attributes": {
                "align": "center",
                "plot": null,
                "text": "Iris data",
                "text_font_size": {
                  "value": "25px"
                }
              },
              "id": "e4188025-c76f-4d15-b2d2-e7b6910a0b81",
              "type": "Title"
            }, {
              "attributes": {
                "active_drag": "auto",
                "active_inspect": "auto",
                "active_scroll": "auto",
                "active_tap": "auto",
                "tools": [{
                  "id": "3529d5a9-9bc2-41a7-b3d0-d7f008dec0df",
                  "type": "PanTool"
                }, {
                  "id": "9f6344ce-b128-41d2-851e-1a1ef569cc42",
                  "type": "WheelZoomTool"
                }, {
                  "id": "b292b53f-fb6a-4ef8-a84f-dda94fad7260",
                  "type": "BoxZoomTool"
                }, {
                  "id": "3c42db6c-6ece-4ec6-a0ce-19db05281633",
                  "type": "SaveTool"
                }, {
                  "id": "17e41df8-8103-4207-bbf2-a73e9bc890b7",
                  "type": "ResetTool"
                }, {
                  "id": "015eed99-57c8-4537-90ca-12fdcdcf67fc",
                  "type": "HelpTool"
                }]
              },
              "id": "6d66b316-5db7-42a2-9276-1273456b769e",
              "type": "Toolbar"
            }, {
              "attributes": {},
              "id": "9d69e541-e699-4d1a-883f-9521c6284b15",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "015eed99-57c8-4537-90ca-12fdcdcf67fc",
              "type": "HelpTool"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "red"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "4cca606e-f887-43b8-a22b-5b0d9922f156",
              "type": "Circle"
            }, {
              "attributes": {},
              "id": "db8be67e-902a-4b21-a2d5-dd198dc84c61",
              "type": "LinearScale"
            }, {
              "attributes": {
                "dimension": 1,
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "925ac870-8499-40e9-9cc4-0969df96ddd8",
                  "type": "BasicTicker"
                }
              },
              "id": "79499611-c695-43c3-85de-4480fef0cf95",
              "type": "Grid"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "cf292f83-c789-4764-a8f8-d44d637537fe",
              "type": "Circle"
            }, {
              "attributes": {
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "b26ab8dd-7cf4-47e6-9583-805156c46078",
              "type": "PanTool"
            }, {
              "attributes": {
                "data_source": {
                  "id": "bef05133-4175-4d6d-ba71-b6e17216df97",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "a9729411-f938-4167-bb33-1917b7927669",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "a3d08681-461e-4527-b308-177b90a7c935",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "657675fb-d970-429f-ae62-c248a90b542c",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "de4896a9-ec31-444a-912d-0f18ca386095",
              "type": "PanTool"
            }, {
              "attributes": {},
              "id": "af4faf3f-2bf8-42eb-b478-7d7ccb0b953a",
              "type": "LinearScale"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "navy"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "35211cba-9b96-4ef9-994a-5a1bc10b4f99",
              "type": "Circle"
            }, {
              "attributes": {
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "ae8a1a6d-b78e-4c7d-9ec9-6d619f659a15",
                  "type": "BasicTicker"
                }
              },
              "id": "6d250968-c293-4753-8698-ad2eadbcd0fc",
              "type": "Grid"
            }, {
              "attributes": {
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "3c42db6c-6ece-4ec6-a0ce-19db05281633",
              "type": "SaveTool"
            }, {
              "attributes": {
                "below": [{
                  "id": "30924bc1-57fc-4893-862a-e59b70f35dd6",
                  "type": "LinearAxis"
                }],
                "left": [{
                  "id": "ab56d5a3-ffd3-41da-8e9d-51fdf4f327ea",
                  "type": "LinearAxis"
                }],
                "renderers": [{
                  "id": "30924bc1-57fc-4893-862a-e59b70f35dd6",
                  "type": "LinearAxis"
                }, {
                  "id": "3d3976b1-5a14-42e8-832e-bfecc4f906c1",
                  "type": "Grid"
                }, {
                  "id": "ab56d5a3-ffd3-41da-8e9d-51fdf4f327ea",
                  "type": "LinearAxis"
                }, {
                  "id": "575bf496-5601-4618-b43a-5739175ca9c7",
                  "type": "Grid"
                }, {
                  "id": "6b0c024f-d5a2-4eb6-aa15-8b3e05fc768d",
                  "type": "BoxAnnotation"
                }, {
                  "id": "657675fb-d970-429f-ae62-c248a90b542c",
                  "type": "GlyphRenderer"
                }, {
                  "id": "802c8ca4-c433-4db8-a775-ddabb1c1e754",
                  "type": "GlyphRenderer"
                }],
                "title": {
                  "id": "b3c1d0e0-d7e7-4887-80c7-1faf0839b7e6",
                  "type": "Title"
                },
                "tool_events": {
                  "id": "53cef1b5-a2c2-4248-946d-ed0ea5c73c6a",
                  "type": "ToolEvents"
                },
                "toolbar": {
                  "id": "6d66b316-5db7-42a2-9276-1273456b769e",
                  "type": "Toolbar"
                },
                "x_range": {
                  "id": "fb74c47e-c3e9-4780-9c26-873744fe1a6a",
                  "type": "DataRange1d"
                },
                "x_scale": {
                  "id": "7af3ec12-6b53-4747-b4cf-fa99a40a5770",
                  "type": "LinearScale"
                },
                "y_range": {
                  "id": "2a27fcb7-2432-4e8d-a5a7-355e59838580",
                  "type": "DataRange1d"
                },
                "y_scale": {
                  "id": "f02726fc-823f-4948-b651-f2d20220221d",
                  "type": "LinearScale"
                }
              },
              "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
              "subtype": "Figure",
              "type": "Plot"
            }, {
              "attributes": {
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "9d69e541-e699-4d1a-883f-9521c6284b15",
                  "type": "BasicTicker"
                }
              },
              "id": "f5015fc5-f900-4bf4-85ce-e506aa2685fe",
              "type": "Grid"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "9fe28bd9-828e-4128-b6b5-6cd11065b1ef",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "20418241-a8ed-4472-ada9-f67b85e71c0e",
              "type": "Circle"
            }, {
              "attributes": {
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "17e41df8-8103-4207-bbf2-a73e9bc890b7",
              "type": "ResetTool"
            }, {
              "attributes": {},
              "id": "66d233d3-ca09-44f4-be65-76a63e928b30",
              "type": "ToolEvents"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "d7ab262f-e3f4-4d44-8c97-967322da31c4",
              "type": "Circle"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "navy"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "1499d5a7-06ad-4dd8-b3cd-18d71f5b42f1",
              "type": "Circle"
            }, {
              "attributes": {},
              "id": "75df1c9f-6b31-44af-95c7-ea0a388bb86e",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "a3d08681-461e-4527-b308-177b90a7c935",
              "type": "Circle"
            }, {
              "attributes": {},
              "id": "733a6089-26df-4543-801b-fae686833c5b",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "9f6344ce-b128-41d2-851e-1a1ef569cc42",
              "type": "WheelZoomTool"
            }, {
              "attributes": {
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "35ac9918-e8db-4204-b830-6ed57eafc752",
              "type": "ResetTool"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzB0CamZmZmZkJQM3MzMzMzAhAzczMzMzMCEDNzMzMzMwEQAAAAAAAAAhAmpmZmZmZAUCamZmZmZkFQAAAAAAAAAhAzczMzMzMBEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAABEAAAAAAAAAEQAAAAAAAAAhAZmZmZmZmBkAzMzMzMzMLQJqZmZmZmQVAMzMzMzMzC0BmZmZmZmYGQAAAAAAAAAhAZmZmZmZmDkCamZmZmZkJQJqZmZmZmQVAmpmZmZmZBUBmZmZmZmYKQGZmZmZmZgZAZmZmZmZmCkBmZmZmZmYGQM3MzMzMzAxAZmZmZmZmBkDNzMzMzMwIQJqZmZmZmQlAZmZmZmZmBkAzMzMzMzMHQGZmZmZmZgpAAAAAAAAACECamZmZmZkJQAAAAAAAAAhAzczMzMzMCEBmZmZmZmYOQAAAAAAAAARAAAAAAAAACEAAAAAAAAAEQJqZmZmZmQlAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzGUDNzMzMzMwcQM3MzMzMzBpAmpmZmZmZGUBmZmZmZmYYQAAAAAAAABhAAAAAAAAAGEAzMzMzMzMXQGZmZmZmZh5AzczMzMzMHkCamZmZmZkZQGZmZmZmZhxAzczMzMzMFkAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQDMzMzMzMxdAzczMzMzMGECamZmZmZkdQM3MzMzMzB5AmpmZmZmZH0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMZQGZmZmZmZhZAzczMzMzMGkCamZmZmZkZQM3MzMzMzBxAMzMzMzMzF0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMdQM3MzMzMzBpAmpmZmZmZF0AAAAAAAAAaQM3MzMzMzBxAmpmZmZmZG0DNzMzMzMweQJqZmZmZmRNAAAAAAAAAGkDNzMzMzMwaQDMzMzMzMxtAMzMzMzMzG0DNzMzMzMwYQAAAAAAAABpAzczMzMzMGkAAAAAAAAAaQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "46bac54c-68dc-44ba-8d68-f741666123ba",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "18b7cbfe-9667-4840-afd9-8346921f3f4a",
              "type": "HelpTool"
            }, {
              "attributes": {
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "507b36cf-b582-4ed3-bc33-23187f6a11b5",
              "type": "SaveTool"
            }, {
              "attributes": {
                "bottom_units": "screen",
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "lightgrey"
                },
                "left_units": "screen",
                "level": "overlay",
                "line_alpha": {
                  "value": 1.0
                },
                "line_color": {
                  "value": "black"
                },
                "line_dash": [4, 4],
                "line_width": {
                  "value": 2
                },
                "plot": null,
                "render_mode": "css",
                "right_units": "screen",
                "top_units": "screen"
              },
              "id": "d7ecb9f0-8b0d-449a-8ea4-34c6266c0b76",
              "type": "BoxAnnotation"
            }, {
              "attributes": {},
              "id": "1d35fa16-5287-408e-99f4-c70b81e59701",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "data_source": {
                  "id": "46bac54c-68dc-44ba-8d68-f741666123ba",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "764ccd93-c993-4d45-a66b-698e8610f53e",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "f7695b66-2059-4e32-86f3-3fab5f66f423",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "9247c654-3b99-4539-a1f0-3fc5ddc0e998",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "red"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "4ae4d4c3-c781-4b48-a762-0b69cde52124",
              "type": "Circle"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzC0AzMzMzMzMLQM3MzMzMzAxAAAAAAAAADECamZmZmZkNQAAAAAAAAAhAMzMzMzMzD0AAAAAAAAAIQJqZmZmZmQ1AZmZmZmZmDkBmZmZmZmYKQJqZmZmZmQlAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAmpmZmZmZEUAzMzMzMzMLQAAAAAAAAAxAmpmZmZmZCUDNzMzMzMwIQAAAAAAAABBAAAAAAAAADECamZmZmZkJQAAAAAAAAAhAzczMzMzMDEBmZmZmZmYOQAAAAAAAAAxAMzMzMzMzB0AAAAAAAAAIQJqZmZmZmQ1AmpmZmZmZCUBmZmZmZmYKQDMzMzMzMwtAzczMzMzMDEBmZmZmZmYOQM3MzMzMzAhAMzMzMzMzC0BmZmZmZmYOQAAAAAAAAAxAAAAAAAAADEAAAAAAAAAIQGZmZmZmZgJAmpmZmZmZCUAzMzMzMzMPQM3MzMzMzAhAzczMzMzMCEAzMzMzMzMLQDMzMzMzMwtAZmZmZmZmEEDNzMzMzMwQQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzE0DNzMzMzMwUQJqZmZmZmRNAAAAAAAAAFkAzMzMzMzMVQJqZmZmZmRFAmpmZmZmZFUAzMzMzMzMTQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQGZmZmZmZhJAZmZmZmZmEkAzMzMzMzMRQJqZmZmZmRVAzczMzMzMFkAzMzMzMzMTQGZmZmZmZhRAzczMzMzMEkCamZmZmZkTQDMzMzMzMxdAzczMzMzMFECamZmZmZkRQAAAAAAAABRAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZEUAzMzMzMzMTQJqZmZmZmRVAzczMzMzMEkBmZmZmZmYUQAAAAAAAABRAAAAAAAAAFEBmZmZmZmYUQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwWQAAAAAAAABRAZmZmZmZmFECamZmZmZkTQAAAAAAAABJAAAAAAAAAFECamZmZmZkVQJqZmZmZmRNAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAzczMzMzMFEAAAAAAAAAWQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "b0345226-9364-4b2f-9091-df5fe9c0c8ed",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "data_source": {
                  "id": "a9536835-889c-4cfa-94b8-01acba1af8c7",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "4ae4d4c3-c781-4b48-a762-0b69cde52124",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "d7ab262f-e3f4-4d44-8c97-967322da31c4",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "95aa0cca-51b9-4bdb-b14a-f790ac1c47b8",
              "type": "GlyphRenderer"
            }, {
              "attributes": {},
              "id": "718a46bf-74e4-40e6-ae80-2e2036bddd17",
              "type": "BasicTicker"
            }, {
              "attributes": {},
              "id": "4e4c6a26-a04c-4e8d-9879-cda1ed387792",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "axis_label": "sepal-length",
                "formatter": {
                  "id": "107e1e87-4a7e-4ecc-816e-697a9079a9c1",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "d832fa87-b3bf-4e5b-bba8-48c62bcf658d",
                  "type": "BasicTicker"
                }
              },
              "id": "a26bf593-757f-47eb-ba4f-ad449882ae78",
              "type": "LinearAxis"
            }, {
              "attributes": {},
              "id": "a025f51a-a035-46a7-b965-38521fbaef53",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzC0AzMzMzMzMLQM3MzMzMzAxAAAAAAAAADECamZmZmZkNQAAAAAAAAAhAMzMzMzMzD0AAAAAAAAAIQJqZmZmZmQ1AZmZmZmZmDkBmZmZmZmYKQJqZmZmZmQlAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAmpmZmZmZEUAzMzMzMzMLQAAAAAAAAAxAmpmZmZmZCUDNzMzMzMwIQAAAAAAAABBAAAAAAAAADECamZmZmZkJQAAAAAAAAAhAzczMzMzMDEBmZmZmZmYOQAAAAAAAAAxAMzMzMzMzB0AAAAAAAAAIQJqZmZmZmQ1AmpmZmZmZCUBmZmZmZmYKQDMzMzMzMwtAzczMzMzMDEBmZmZmZmYOQM3MzMzMzAhAMzMzMzMzC0BmZmZmZmYOQAAAAAAAAAxAAAAAAAAADEAAAAAAAAAIQGZmZmZmZgJAmpmZmZmZCUAzMzMzMzMPQM3MzMzMzAhAzczMzMzMCEAzMzMzMzMLQDMzMzMzMwtAZmZmZmZmEEDNzMzMzMwQQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzE0DNzMzMzMwUQJqZmZmZmRNAAAAAAAAAFkAzMzMzMzMVQJqZmZmZmRFAmpmZmZmZFUAzMzMzMzMTQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQGZmZmZmZhJAZmZmZmZmEkAzMzMzMzMRQJqZmZmZmRVAzczMzMzMFkAzMzMzMzMTQGZmZmZmZhRAzczMzMzMEkCamZmZmZkTQDMzMzMzMxdAzczMzMzMFECamZmZmZkRQAAAAAAAABRAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZEUAzMzMzMzMTQJqZmZmZmRVAzczMzMzMEkBmZmZmZmYUQAAAAAAAABRAAAAAAAAAFEBmZmZmZmYUQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwWQAAAAAAAABRAZmZmZmZmFECamZmZmZkTQAAAAAAAABJAAAAAAAAAFECamZmZmZkVQJqZmZmZmRNAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAzczMzMzMFEAAAAAAAAAWQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "80f286ab-e5b2-476f-875b-7cae24babf3a",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "data_source": {
                  "id": "80f286ab-e5b2-476f-875b-7cae24babf3a",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "8241e02a-ebc5-4ec7-8217-6be141e1908a",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "111eed26-839d-4f45-abfb-5827f82a2670",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "a6a9c93a-519b-4907-980d-173eda2c7703",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "f7695b66-2059-4e32-86f3-3fab5f66f423",
              "type": "Circle"
            }, {
              "attributes": {
                "overlay": {
                  "id": "6472f13e-fb9c-43c9-9f2b-8562fbf0a82a",
                  "type": "BoxAnnotation"
                },
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "66e0597b-9cb7-4023-af60-6b6a0764130d",
              "type": "BoxZoomTool"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "b1fe3178-21ba-4d27-bcf7-1baa0565ebeb",
              "type": "Circle"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzB0CamZmZmZkJQM3MzMzMzAhAzczMzMzMCEDNzMzMzMwEQAAAAAAAAAhAmpmZmZmZAUCamZmZmZkFQAAAAAAAAAhAzczMzMzMBEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAABEAAAAAAAAAEQAAAAAAAAAhAZmZmZmZmBkAzMzMzMzMLQJqZmZmZmQVAMzMzMzMzC0BmZmZmZmYGQAAAAAAAAAhAZmZmZmZmDkCamZmZmZkJQJqZmZmZmQVAmpmZmZmZBUBmZmZmZmYKQGZmZmZmZgZAZmZmZmZmCkBmZmZmZmYGQM3MzMzMzAxAZmZmZmZmBkDNzMzMzMwIQJqZmZmZmQlAZmZmZmZmBkAzMzMzMzMHQGZmZmZmZgpAAAAAAAAACECamZmZmZkJQAAAAAAAAAhAzczMzMzMCEBmZmZmZmYOQAAAAAAAAARAAAAAAAAACEAAAAAAAAAEQJqZmZmZmQlAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzGUDNzMzMzMwcQM3MzMzMzBpAmpmZmZmZGUBmZmZmZmYYQAAAAAAAABhAAAAAAAAAGEAzMzMzMzMXQGZmZmZmZh5AzczMzMzMHkCamZmZmZkZQGZmZmZmZhxAzczMzMzMFkAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQDMzMzMzMxdAzczMzMzMGECamZmZmZkdQM3MzMzMzB5AmpmZmZmZH0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMZQGZmZmZmZhZAzczMzMzMGkCamZmZmZkZQM3MzMzMzBxAMzMzMzMzF0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMdQM3MzMzMzBpAmpmZmZmZF0AAAAAAAAAaQM3MzMzMzBxAmpmZmZmZG0DNzMzMzMweQJqZmZmZmRNAAAAAAAAAGkDNzMzMzMwaQDMzMzMzMxtAMzMzMzMzG0DNzMzMzMwYQAAAAAAAABpAzczMzMzMGkAAAAAAAAAaQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "edc1c087-a474-4f20-a0bf-2d4a4b4e1a43",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "below": [{
                  "id": "f2cc33bd-d893-45a8-a53f-75049ecdc296",
                  "type": "LinearAxis"
                }],
                "left": [{
                  "id": "a26bf593-757f-47eb-ba4f-ad449882ae78",
                  "type": "LinearAxis"
                }],
                "renderers": [{
                  "id": "f2cc33bd-d893-45a8-a53f-75049ecdc296",
                  "type": "LinearAxis"
                }, {
                  "id": "6d250968-c293-4753-8698-ad2eadbcd0fc",
                  "type": "Grid"
                }, {
                  "id": "a26bf593-757f-47eb-ba4f-ad449882ae78",
                  "type": "LinearAxis"
                }, {
                  "id": "a157341d-287b-456b-b155-7d86cd343c79",
                  "type": "Grid"
                }, {
                  "id": "d7ecb9f0-8b0d-449a-8ea4-34c6266c0b76",
                  "type": "BoxAnnotation"
                }, {
                  "id": "c0aef514-0178-44f3-a420-6fca39740c57",
                  "type": "GlyphRenderer"
                }, {
                  "id": "42f74a58-dfbe-42af-8108-875597cd56fe",
                  "type": "GlyphRenderer"
                }],
                "title": {
                  "id": "5a579712-e489-4527-aeef-2ebb8ad75eb3",
                  "type": "Title"
                },
                "tool_events": {
                  "id": "66d233d3-ca09-44f4-be65-76a63e928b30",
                  "type": "ToolEvents"
                },
                "toolbar": {
                  "id": "66b9d0ec-99ba-4ee6-91d9-6aa52ae7e99a",
                  "type": "Toolbar"
                },
                "toolbar_location": null,
                "x_range": {
                  "id": "0a1ba489-83ce-484c-9735-b340a65d4f65",
                  "type": "DataRange1d"
                },
                "x_scale": {
                  "id": "f53283ec-8fb3-49c6-af5b-0ba211ac5fc6",
                  "type": "LinearScale"
                },
                "y_range": {
                  "id": "4f83c6dd-fc18-43e8-841d-7cf4ea4c2dbe",
                  "type": "DataRange1d"
                },
                "y_scale": {
                  "id": "af4faf3f-2bf8-42eb-b478-7d7ccb0b953a",
                  "type": "LinearScale"
                }
              },
              "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
              "subtype": "Figure",
              "type": "Plot"
            }, {
              "attributes": {},
              "id": "925ac870-8499-40e9-9cc4-0969df96ddd8",
              "type": "BasicTicker"
            }, {
              "attributes": {},
              "id": "f53283ec-8fb3-49c6-af5b-0ba211ac5fc6",
              "type": "LinearScale"
            }, {
              "attributes": {},
              "id": "107e1e87-4a7e-4ecc-816e-697a9079a9c1",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "ca2b4b28-8282-4b78-abd9-c4e1de3c2efe",
              "type": "HelpTool"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "fb74c47e-c3e9-4780-9c26-873744fe1a6a",
              "type": "DataRange1d"
            }, {
              "attributes": {},
              "id": "e4cde760-b669-4b0b-8ab1-e3340774efdc",
              "type": "LinearScale"
            }, {
              "attributes": {
                "axis_label": "sepal-length",
                "formatter": {
                  "id": "4e4c6a26-a04c-4e8d-9879-cda1ed387792",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "925ac870-8499-40e9-9cc4-0969df96ddd8",
                  "type": "BasicTicker"
                }
              },
              "id": "728c4fda-e4a2-4f3e-a569-7f71157297b2",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzB0CamZmZmZkJQM3MzMzMzAhAzczMzMzMCEDNzMzMzMwEQAAAAAAAAAhAmpmZmZmZAUCamZmZmZkFQAAAAAAAAAhAzczMzMzMBEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAABEAAAAAAAAAEQAAAAAAAAAhAZmZmZmZmBkAzMzMzMzMLQJqZmZmZmQVAMzMzMzMzC0BmZmZmZmYGQAAAAAAAAAhAZmZmZmZmDkCamZmZmZkJQJqZmZmZmQVAmpmZmZmZBUBmZmZmZmYKQGZmZmZmZgZAZmZmZmZmCkBmZmZmZmYGQM3MzMzMzAxAZmZmZmZmBkDNzMzMzMwIQJqZmZmZmQlAZmZmZmZmBkAzMzMzMzMHQGZmZmZmZgpAAAAAAAAACECamZmZmZkJQAAAAAAAAAhAzczMzMzMCEBmZmZmZmYOQAAAAAAAAARAAAAAAAAACEAAAAAAAAAEQJqZmZmZmQlAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzGUDNzMzMzMwcQM3MzMzMzBpAmpmZmZmZGUBmZmZmZmYYQAAAAAAAABhAAAAAAAAAGEAzMzMzMzMXQGZmZmZmZh5AzczMzMzMHkCamZmZmZkZQGZmZmZmZhxAzczMzMzMFkAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQDMzMzMzMxdAzczMzMzMGECamZmZmZkdQM3MzMzMzB5AmpmZmZmZH0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMZQGZmZmZmZhZAzczMzMzMGkCamZmZmZkZQM3MzMzMzBxAMzMzMzMzF0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMdQM3MzMzMzBpAmpmZmZmZF0AAAAAAAAAaQM3MzMzMzBxAmpmZmZmZG0DNzMzMzMweQJqZmZmZmRNAAAAAAAAAGkDNzMzMzMwaQDMzMzMzMxtAMzMzMzMzG0DNzMzMzMwYQAAAAAAAABpAzczMzMzMGkAAAAAAAAAaQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "676b9ca8-af6c-4c14-912d-d2614ba8e3d5",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "2bf06c0f-c9e3-4479-80d0-f688e15f50ea",
              "type": "WheelZoomTool"
            }, {
              "attributes": {
                "axis_label": "sepal-width",
                "axis_label_standoff": 30,
                "formatter": {
                  "id": "f6d2c0ea-eea9-41b8-b323-b38ff8053a25",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "ae8a1a6d-b78e-4c7d-9ec9-6d619f659a15",
                  "type": "BasicTicker"
                }
              },
              "id": "f2cc33bd-d893-45a8-a53f-75049ecdc296",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "98779635-5f7f-4135-b656-dbeea9511fbb",
              "type": "SaveTool"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "a7bc4da2-2467-44d1-9450-e37ddbf57ef3",
              "type": "Circle"
            }, {
              "attributes": {
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "2a9cfab7-7df1-4961-a908-9154da2b5c1f",
              "type": "PanTool"
            }, {
              "attributes": {
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "e8c9e571-30f0-47b2-892d-4c76718e4cd8",
              "type": "ResetTool"
            }, {
              "attributes": {},
              "id": "52c00842-2bcf-4468-8cd2-58d7b93a366b",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "data_source": {
                  "id": "b0345226-9364-4b2f-9091-df5fe9c0c8ed",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "27d7adfb-e390-4022-a344-8b35b66f2be5",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "20418241-a8ed-4472-ada9-f67b85e71c0e",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "42f74a58-dfbe-42af-8108-875597cd56fe",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "bottom_units": "screen",
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "lightgrey"
                },
                "left_units": "screen",
                "level": "overlay",
                "line_alpha": {
                  "value": 1.0
                },
                "line_color": {
                  "value": "black"
                },
                "line_dash": [4, 4],
                "line_width": {
                  "value": 2
                },
                "plot": null,
                "render_mode": "css",
                "right_units": "screen",
                "top_units": "screen"
              },
              "id": "6b0c024f-d5a2-4eb6-aa15-8b3e05fc768d",
              "type": "BoxAnnotation"
            }, {
              "attributes": {},
              "id": "2c997969-c76c-48a9-9087-ed9e3c8c6b42",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "below": [{
                  "id": "1c1a049b-4759-40df-a8bd-38d4add9c11c",
                  "type": "LinearAxis"
                }],
                "left": [{
                  "id": "728c4fda-e4a2-4f3e-a569-7f71157297b2",
                  "type": "LinearAxis"
                }],
                "output_backend": "svg",
                "renderers": [{
                  "id": "1c1a049b-4759-40df-a8bd-38d4add9c11c",
                  "type": "LinearAxis"
                }, {
                  "id": "77d65113-f6ea-4258-9058-a8b5731177e0",
                  "type": "Grid"
                }, {
                  "id": "728c4fda-e4a2-4f3e-a569-7f71157297b2",
                  "type": "LinearAxis"
                }, {
                  "id": "79499611-c695-43c3-85de-4480fef0cf95",
                  "type": "Grid"
                }, {
                  "id": "6472f13e-fb9c-43c9-9f2b-8562fbf0a82a",
                  "type": "BoxAnnotation"
                }, {
                  "id": "b9eb8c7d-74b8-4ad9-95d2-0af6461051a8",
                  "type": "GlyphRenderer"
                }, {
                  "id": "35a8d20c-c7a9-419e-af00-9de034ecc54d",
                  "type": "GlyphRenderer"
                }],
                "title": {
                  "id": "cdaa9e85-e6a7-4ec9-8c25-91ff5e3bb0a5",
                  "type": "Title"
                },
                "tool_events": {
                  "id": "1a988494-c8b7-461c-b4a5-77ac24ad2ed5",
                  "type": "ToolEvents"
                },
                "toolbar": {
                  "id": "4b12e786-f884-41f2-a68e-ac5d4b66ebe6",
                  "type": "Toolbar"
                },
                "toolbar_location": null,
                "x_range": {
                  "id": "1887d7b5-adba-4622-b4a7-14f6439276c6",
                  "type": "DataRange1d"
                },
                "x_scale": {
                  "id": "c9a7d07e-6741-4a8e-a0c8-f0fef8886a0f",
                  "type": "LinearScale"
                },
                "y_range": {
                  "id": "8183b86a-2eb0-4e70-aa69-94299cbd6c6d",
                  "type": "DataRange1d"
                },
                "y_scale": {
                  "id": "f6361472-19a3-4394-a408-f83be53f8864",
                  "type": "LinearScale"
                }
              },
              "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
              "subtype": "Figure",
              "type": "Plot"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "111eed26-839d-4f45-abfb-5827f82a2670",
              "type": "Circle"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "1887d7b5-adba-4622-b4a7-14f6439276c6",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "dimension": 1,
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "1d35fa16-5287-408e-99f4-c70b81e59701",
                  "type": "BasicTicker"
                }
              },
              "id": "760869bb-48fb-44f3-8732-7bd946d09300",
              "type": "Grid"
            }, {
              "attributes": {
                "data_source": {
                  "id": "9817ef97-ca0f-4155-9285-e55eb37790c2",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "8b57d1ba-8e2b-40fb-ab60-df8f8e2489f0",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "cf292f83-c789-4764-a8f8-d44d637537fe",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "802c8ca4-c433-4db8-a775-ddabb1c1e754",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "4f83c6dd-fc18-43e8-841d-7cf4ea4c2dbe",
              "type": "DataRange1d"
            }, {
              "attributes": {},
              "id": "06bfc731-ae20-4104-831c-3dd28dfce222",
              "type": "LinearScale"
            }, {
              "attributes": {},
              "id": "17ddcf40-92d7-44af-9137-07249fcc8afc",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzC0AzMzMzMzMLQM3MzMzMzAxAAAAAAAAADECamZmZmZkNQAAAAAAAAAhAMzMzMzMzD0AAAAAAAAAIQJqZmZmZmQ1AZmZmZmZmDkBmZmZmZmYKQJqZmZmZmQlAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAmpmZmZmZEUAzMzMzMzMLQAAAAAAAAAxAmpmZmZmZCUDNzMzMzMwIQAAAAAAAABBAAAAAAAAADECamZmZmZkJQAAAAAAAAAhAzczMzMzMDEBmZmZmZmYOQAAAAAAAAAxAMzMzMzMzB0AAAAAAAAAIQJqZmZmZmQ1AmpmZmZmZCUBmZmZmZmYKQDMzMzMzMwtAzczMzMzMDEBmZmZmZmYOQM3MzMzMzAhAMzMzMzMzC0BmZmZmZmYOQAAAAAAAAAxAAAAAAAAADEAAAAAAAAAIQGZmZmZmZgJAmpmZmZmZCUAzMzMzMzMPQM3MzMzMzAhAzczMzMzMCEAzMzMzMzMLQDMzMzMzMwtAZmZmZmZmEEDNzMzMzMwQQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzE0DNzMzMzMwUQJqZmZmZmRNAAAAAAAAAFkAzMzMzMzMVQJqZmZmZmRFAmpmZmZmZFUAzMzMzMzMTQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQGZmZmZmZhJAZmZmZmZmEkAzMzMzMzMRQJqZmZmZmRVAzczMzMzMFkAzMzMzMzMTQGZmZmZmZhRAzczMzMzMEkCamZmZmZkTQDMzMzMzMxdAzczMzMzMFECamZmZmZkRQAAAAAAAABRAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZEUAzMzMzMzMTQJqZmZmZmRVAzczMzMzMEkBmZmZmZmYUQAAAAAAAABRAAAAAAAAAFEBmZmZmZmYUQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwWQAAAAAAAABRAZmZmZmZmFECamZmZmZkTQAAAAAAAABJAAAAAAAAAFECamZmZmZkVQJqZmZmZmRNAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAzczMzMzMFEAAAAAAAAAWQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "9817ef97-ca0f-4155-9285-e55eb37790c2",
              "type": "ColumnDataSource"
            }, {
              "attributes": {},
              "id": "7af3ec12-6b53-4747-b4cf-fa99a40a5770",
              "type": "LinearScale"
            }, {
              "attributes": {
                "align": "center",
                "plot": null,
                "text": "Iris data",
                "text_font_size": {
                  "value": "25px"
                }
              },
              "id": "b3c1d0e0-d7e7-4887-80c7-1faf0839b7e6",
              "type": "Title"
            }, {
              "attributes": {
                "axis_label": "sepal-width",
                "axis_label_standoff": 30,
                "formatter": {
                  "id": "8a40610e-5c6d-4ca9-809d-ca5bc7b558fd",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "a025f51a-a035-46a7-b965-38521fbaef53",
                  "type": "BasicTicker"
                }
              },
              "id": "30924bc1-57fc-4893-862a-e59b70f35dd6",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzB0CamZmZmZkJQM3MzMzMzAhAzczMzMzMCEDNzMzMzMwEQAAAAAAAAAhAmpmZmZmZAUCamZmZmZkFQAAAAAAAAAhAzczMzMzMBEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAABEAAAAAAAAAEQAAAAAAAAAhAZmZmZmZmBkAzMzMzMzMLQJqZmZmZmQVAMzMzMzMzC0BmZmZmZmYGQAAAAAAAAAhAZmZmZmZmDkCamZmZmZkJQJqZmZmZmQVAmpmZmZmZBUBmZmZmZmYKQGZmZmZmZgZAZmZmZmZmCkBmZmZmZmYGQM3MzMzMzAxAZmZmZmZmBkDNzMzMzMwIQJqZmZmZmQlAZmZmZmZmBkAzMzMzMzMHQGZmZmZmZgpAAAAAAAAACECamZmZmZkJQAAAAAAAAAhAzczMzMzMCEBmZmZmZmYOQAAAAAAAAARAAAAAAAAACEAAAAAAAAAEQJqZmZmZmQlAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzGUDNzMzMzMwcQM3MzMzMzBpAmpmZmZmZGUBmZmZmZmYYQAAAAAAAABhAAAAAAAAAGEAzMzMzMzMXQGZmZmZmZh5AzczMzMzMHkCamZmZmZkZQGZmZmZmZhxAzczMzMzMFkAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQDMzMzMzMxdAzczMzMzMGECamZmZmZkdQM3MzMzMzB5AmpmZmZmZH0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMZQGZmZmZmZhZAzczMzMzMGkCamZmZmZkZQM3MzMzMzBxAMzMzMzMzF0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMdQM3MzMzMzBpAmpmZmZmZF0AAAAAAAAAaQM3MzMzMzBxAmpmZmZmZG0DNzMzMzMweQJqZmZmZmRNAAAAAAAAAGkDNzMzMzMwaQDMzMzMzMxtAMzMzMzMzG0DNzMzMzMwYQAAAAAAAABpAzczMzMzMGkAAAAAAAAAaQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "bef05133-4175-4d6d-ba71-b6e17216df97",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "align": "center",
                "plot": null,
                "text": "Iris data",
                "text_font_size": {
                  "value": "25px"
                }
              },
              "id": "cdaa9e85-e6a7-4ec9-8c25-91ff5e3bb0a5",
              "type": "Title"
            }, {
              "attributes": {},
              "id": "d832fa87-b3bf-4e5b-bba8-48c62bcf658d",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "align": "center",
                "plot": null,
                "text": "Iris data",
                "text_font_size": {
                  "value": "25px"
                }
              },
              "id": "5a579712-e489-4527-aeef-2ebb8ad75eb3",
              "type": "Title"
            }, {
              "attributes": {
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "fd729fbd-6c12-482a-94a8-c31c6e465126",
              "type": "HelpTool"
            }, {
              "attributes": {
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "2cda395d-2251-4174-a1d8-42b3434f175d",
              "type": "SaveTool"
            }, {
              "attributes": {
                "axis_label": "sepal-length",
                "formatter": {
                  "id": "75df1c9f-6b31-44af-95c7-ea0a388bb86e",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "1d35fa16-5287-408e-99f4-c70b81e59701",
                  "type": "BasicTicker"
                }
              },
              "id": "61558347-0d67-4f7e-a212-999bc07aa8d7",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "dimension": 1,
                "plot": {
                  "id": "4b2f7540-7118-4dfd-9834-3b3273e0fd0a",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "d832fa87-b3bf-4e5b-bba8-48c62bcf658d",
                  "type": "BasicTicker"
                }
              },
              "id": "a157341d-287b-456b-b155-7d86cd343c79",
              "type": "Grid"
            }, {
              "attributes": {},
              "id": "f6d2c0ea-eea9-41b8-b323-b38ff8053a25",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {},
              "id": "8a40610e-5c6d-4ca9-809d-ca5bc7b558fd",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {},
              "id": "c9a7d07e-6741-4a8e-a0c8-f0fef8886a0f",
              "type": "LinearScale"
            }, {
              "attributes": {
                "active_drag": "auto",
                "active_inspect": "auto",
                "active_scroll": "auto",
                "active_tap": "auto",
                "logo": null,
                "tools": [{
                  "id": "b26ab8dd-7cf4-47e6-9583-805156c46078",
                  "type": "PanTool"
                }, {
                  "id": "2bf06c0f-c9e3-4479-80d0-f688e15f50ea",
                  "type": "WheelZoomTool"
                }, {
                  "id": "5c3999aa-48f7-4842-9074-424f15440e36",
                  "type": "BoxZoomTool"
                }, {
                  "id": "98779635-5f7f-4135-b656-dbeea9511fbb",
                  "type": "SaveTool"
                }, {
                  "id": "35ac9918-e8db-4204-b830-6ed57eafc752",
                  "type": "ResetTool"
                }, {
                  "id": "18b7cbfe-9667-4840-afd9-8346921f3f4a",
                  "type": "HelpTool"
                }]
              },
              "id": "66b9d0ec-99ba-4ee6-91d9-6aa52ae7e99a",
              "type": "Toolbar"
            }, {
              "attributes": {
                "overlay": {
                  "id": "6d323478-0525-4c8d-ba0f-22b740c112a7",
                  "type": "BoxAnnotation"
                },
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "504b397a-f385-4ec8-8400-155e90c74749",
              "type": "BoxZoomTool"
            }, {
              "attributes": {
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "8fc60530-6afd-4877-b2c8-fafabbc8f53d",
              "type": "PanTool"
            }, {
              "attributes": {},
              "id": "e848d41c-1aad-412d-851f-937141fcdb68",
              "type": "ToolEvents"
            }, {
              "attributes": {
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "718a46bf-74e4-40e6-ae80-2e2036bddd17",
                  "type": "BasicTicker"
                }
              },
              "id": "77d65113-f6ea-4258-9058-a8b5731177e0",
              "type": "Grid"
            }, {
              "attributes": {},
              "id": "040053c1-470d-4dfa-9752-da1ce32ca9c5",
              "type": "LinearScale"
            }, {
              "attributes": {
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "e808a372-788d-46de-a240-9fe5ba1a4a7d",
              "type": "WheelZoomTool"
            }, {
              "attributes": {},
              "id": "3fa03d99-8a7e-45dd-ad79-b6eee71ae9c9",
              "type": "BasicTicker"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "navy"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "764ccd93-c993-4d45-a66b-698e8610f53e",
              "type": "Circle"
            }, {
              "attributes": {},
              "id": "53cef1b5-a2c2-4248-946d-ed0ea5c73c6a",
              "type": "ToolEvents"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "2a27fcb7-2432-4e8d-a5a7-355e59838580",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "0a1ba489-83ce-484c-9735-b340a65d4f65",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzC0AzMzMzMzMLQM3MzMzMzAxAAAAAAAAADECamZmZmZkNQAAAAAAAAAhAMzMzMzMzD0AAAAAAAAAIQJqZmZmZmQ1AZmZmZmZmDkBmZmZmZmYKQJqZmZmZmQlAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAmpmZmZmZEUAzMzMzMzMLQAAAAAAAAAxAmpmZmZmZCUDNzMzMzMwIQAAAAAAAABBAAAAAAAAADECamZmZmZkJQAAAAAAAAAhAzczMzMzMDEBmZmZmZmYOQAAAAAAAAAxAMzMzMzMzB0AAAAAAAAAIQJqZmZmZmQ1AmpmZmZmZCUBmZmZmZmYKQDMzMzMzMwtAzczMzMzMDEBmZmZmZmYOQM3MzMzMzAhAMzMzMzMzC0BmZmZmZmYOQAAAAAAAAAxAAAAAAAAADEAAAAAAAAAIQGZmZmZmZgJAmpmZmZmZCUAzMzMzMzMPQM3MzMzMzAhAzczMzMzMCEAzMzMzMzMLQDMzMzMzMwtAZmZmZmZmEEDNzMzMzMwQQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzE0DNzMzMzMwUQJqZmZmZmRNAAAAAAAAAFkAzMzMzMzMVQJqZmZmZmRFAmpmZmZmZFUAzMzMzMzMTQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQGZmZmZmZhJAZmZmZmZmEkAzMzMzMzMRQJqZmZmZmRVAzczMzMzMFkAzMzMzMzMTQGZmZmZmZhRAzczMzMzMEkCamZmZmZkTQDMzMzMzMxdAzczMzMzMFECamZmZmZkRQAAAAAAAABRAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZEUAzMzMzMzMTQJqZmZmZmRVAzczMzMzMEkBmZmZmZmYUQAAAAAAAABRAAAAAAAAAFEBmZmZmZmYUQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwWQAAAAAAAABRAZmZmZmZmFECamZmZmZkTQAAAAAAAABJAAAAAAAAAFECamZmZmZkVQJqZmZmZmRNAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAzczMzMzMFEAAAAAAAAAWQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "88e71262-2e25-4b9c-bfdc-872fbb05c4b6",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "callback": null
              },
              "id": "065fbe32-4cc4-4944-95ee-87a8d941e764",
              "type": "DataRange1d"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "navy"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "468e4d05-0d65-4aed-801f-abae22c46f2a",
              "type": "Circle"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzB0CamZmZmZkJQM3MzMzMzAhAzczMzMzMCEDNzMzMzMwEQAAAAAAAAAhAmpmZmZmZAUCamZmZmZkFQAAAAAAAAAhAzczMzMzMBEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAABEAAAAAAAAAEQAAAAAAAAAhAZmZmZmZmBkAzMzMzMzMLQJqZmZmZmQVAMzMzMzMzC0BmZmZmZmYGQAAAAAAAAAhAZmZmZmZmDkCamZmZmZkJQJqZmZmZmQVAmpmZmZmZBUBmZmZmZmYKQGZmZmZmZgZAZmZmZmZmCkBmZmZmZmYGQM3MzMzMzAxAZmZmZmZmBkDNzMzMzMwIQJqZmZmZmQlAZmZmZmZmBkAzMzMzMzMHQGZmZmZmZgpAAAAAAAAACECamZmZmZkJQAAAAAAAAAhAzczMzMzMCEBmZmZmZmYOQAAAAAAAAARAAAAAAAAACEAAAAAAAAAEQJqZmZmZmQlAAAAAAAAACEBmZmZmZmYGQAAAAAAAAAhAAAAAAAAACEAAAAAAAAAIQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzGUDNzMzMzMwcQM3MzMzMzBpAmpmZmZmZGUBmZmZmZmYYQAAAAAAAABhAAAAAAAAAGEAzMzMzMzMXQGZmZmZmZh5AzczMzMzMHkCamZmZmZkZQGZmZmZmZhxAzczMzMzMFkAzMzMzMzMZQGZmZmZmZhhAzczMzMzMHkAzMzMzMzMZQDMzMzMzMxdAzczMzMzMGECamZmZmZkdQM3MzMzMzB5AmpmZmZmZH0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMZQGZmZmZmZhZAzczMzMzMGkCamZmZmZkZQM3MzMzMzBxAMzMzMzMzF0CamZmZmZkbQJqZmZmZmRlAMzMzMzMzGUAzMzMzMzMdQM3MzMzMzBpAmpmZmZmZF0AAAAAAAAAaQM3MzMzMzBxAmpmZmZmZG0DNzMzMzMweQJqZmZmZmRNAAAAAAAAAGkDNzMzMzMwaQDMzMzMzMxtAMzMzMzMzG0DNzMzMzMwYQAAAAAAAABpAzczMzMzMGkAAAAAAAAAaQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "0178bb99-564d-43bd-a476-6600cbaa7206",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "data_source": {
                  "id": "0178bb99-564d-43bd-a476-6600cbaa7206",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "35211cba-9b96-4ef9-994a-5a1bc10b4f99",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "a7bc4da2-2467-44d1-9450-e37ddbf57ef3",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "c0aef514-0178-44f3-a420-6fca39740c57",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "overlay": {
                  "id": "fa066cd1-865a-4839-9e9c-18f7bab8b285",
                  "type": "BoxAnnotation"
                },
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "192d5afd-2fa9-49f7-a006-49cc31011af9",
              "type": "BoxZoomTool"
            }, {
              "attributes": {
                "bottom_units": "screen",
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "lightgrey"
                },
                "left_units": "screen",
                "level": "overlay",
                "line_alpha": {
                  "value": 1.0
                },
                "line_color": {
                  "value": "black"
                },
                "line_dash": [4, 4],
                "line_width": {
                  "value": 2
                },
                "plot": null,
                "render_mode": "css",
                "right_units": "screen",
                "top_units": "screen"
              },
              "id": "fa066cd1-865a-4839-9e9c-18f7bab8b285",
              "type": "BoxAnnotation"
            }, {
              "attributes": {
                "axis_label": "sepal-length",
                "formatter": {
                  "id": "733a6089-26df-4543-801b-fae686833c5b",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "49facf79-b4a3-482a-9631-ddbf0634a212",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "17ddcf40-92d7-44af-9137-07249fcc8afc",
                  "type": "BasicTicker"
                }
              },
              "id": "ab56d5a3-ffd3-41da-8e9d-51fdf4f327ea",
              "type": "LinearAxis"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "red"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "8241e02a-ebc5-4ec7-8217-6be141e1908a",
              "type": "Circle"
            }, {
              "attributes": {
                "data_source": {
                  "id": "88e71262-2e25-4b9c-bfdc-872fbb05c4b6",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "4cca606e-f887-43b8-a22b-5b0d9922f156",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "8a739f36-3a55-4469-ae2b-5e6b87fa89f0",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "35a8d20c-c7a9-419e-af00-9de034ecc54d",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.1
                },
                "fill_color": {
                  "value": "#1f77b4"
                },
                "line_alpha": {
                  "value": 0.1
                },
                "line_color": {
                  "value": "#1f77b4"
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "2e34261a-5667-476d-8af9-49c2315a1500",
              "type": "Circle"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "navy"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "a9729411-f938-4167-bb33-1917b7927669",
              "type": "Circle"
            }, {
              "attributes": {
                "plot": {
                  "id": "f1b745c0-baa1-45cc-8d2b-8025d462d02c",
                  "subtype": "Figure",
                  "type": "Plot"
                }
              },
              "id": "398cb2ec-20b1-474e-9da1-1a356047c92e",
              "type": "SaveTool"
            }, {
              "attributes": {
                "callback": null,
                "column_names": ["x", "y"],
                "data": {
                  "x": {
                    "__ndarray__": "MzMzMzMzC0AzMzMzMzMLQM3MzMzMzAxAAAAAAAAADECamZmZmZkNQAAAAAAAAAhAMzMzMzMzD0AAAAAAAAAIQJqZmZmZmQ1AZmZmZmZmDkBmZmZmZmYKQJqZmZmZmQlAMzMzMzMzC0AAAAAAAAAIQDMzMzMzMwtAmpmZmZmZEUAzMzMzMzMLQAAAAAAAAAxAmpmZmZmZCUDNzMzMzMwIQAAAAAAAABBAAAAAAAAADECamZmZmZkJQAAAAAAAAAhAzczMzMzMDEBmZmZmZmYOQAAAAAAAAAxAMzMzMzMzB0AAAAAAAAAIQJqZmZmZmQ1AmpmZmZmZCUBmZmZmZmYKQDMzMzMzMwtAzczMzMzMDEBmZmZmZmYOQM3MzMzMzAhAMzMzMzMzC0BmZmZmZmYOQAAAAAAAAAxAAAAAAAAADEAAAAAAAAAIQGZmZmZmZgJAmpmZmZmZCUAzMzMzMzMPQM3MzMzMzAhAzczMzMzMCEAzMzMzMzMLQDMzMzMzMwtAZmZmZmZmEEDNzMzMzMwQQA==",
                    "dtype": "float64",
                    "shape": [50]
                  },
                  "y": {
                    "__ndarray__": "MzMzMzMzE0DNzMzMzMwUQJqZmZmZmRNAAAAAAAAAFkAzMzMzMzMVQJqZmZmZmRFAmpmZmZmZFUAzMzMzMzMTQGZmZmZmZhRAZmZmZmZmFEAAAAAAAAAUQGZmZmZmZhJAZmZmZmZmEkAzMzMzMzMRQJqZmZmZmRVAzczMzMzMFkAzMzMzMzMTQGZmZmZmZhRAzczMzMzMEkCamZmZmZkTQDMzMzMzMxdAzczMzMzMFECamZmZmZkRQAAAAAAAABRAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAmpmZmZmZEUAzMzMzMzMTQJqZmZmZmRVAzczMzMzMEkBmZmZmZmYUQAAAAAAAABRAAAAAAAAAFEBmZmZmZmYUQDMzMzMzMxNAmpmZmZmZFUDNzMzMzMwWQAAAAAAAABRAZmZmZmZmFECamZmZmZkTQAAAAAAAABJAAAAAAAAAFECamZmZmZkVQJqZmZmZmRNAZmZmZmZmEkBmZmZmZmYUQAAAAAAAABRAzczMzMzMFEAAAAAAAAAWQA==",
                    "dtype": "float64",
                    "shape": [50]
                  }
                }
              },
              "id": "a9536835-889c-4cfa-94b8-01acba1af8c7",
              "type": "ColumnDataSource"
            }, {
              "attributes": {
                "below": [{
                  "id": "dd3b644e-c692-42df-9567-cc1c62cd0a8f",
                  "type": "LinearAxis"
                }],
                "left": [{
                  "id": "4bbfd361-219c-4b1b-9b01-eb84af28f0ee",
                  "type": "LinearAxis"
                }],
                "renderers": [{
                  "id": "dd3b644e-c692-42df-9567-cc1c62cd0a8f",
                  "type": "LinearAxis"
                }, {
                  "id": "f5015fc5-f900-4bf4-85ce-e506aa2685fe",
                  "type": "Grid"
                }, {
                  "id": "4bbfd361-219c-4b1b-9b01-eb84af28f0ee",
                  "type": "LinearAxis"
                }, {
                  "id": "2c42ff7e-1228-4041-aa07-3c0e7a6170a6",
                  "type": "Grid"
                }, {
                  "id": "fa066cd1-865a-4839-9e9c-18f7bab8b285",
                  "type": "BoxAnnotation"
                }, {
                  "id": "9247c654-3b99-4539-a1f0-3fc5ddc0e998",
                  "type": "GlyphRenderer"
                }, {
                  "id": "a6a9c93a-519b-4907-980d-173eda2c7703",
                  "type": "GlyphRenderer"
                }],
                "title": {
                  "id": "cf2e6242-cbcf-4391-8939-fb881dc3919a",
                  "type": "Title"
                },
                "tool_events": {
                  "id": "4b106816-d3ac-4e00-b04b-939cac85d0e5",
                  "type": "ToolEvents"
                },
                "toolbar": {
                  "id": "3b44c26f-72ea-4ceb-819b-3c7b076e2e75",
                  "type": "Toolbar"
                },
                "toolbar_location": null,
                "x_range": {
                  "id": "bc9b84b6-f3da-4d03-89aa-543381944ead",
                  "type": "DataRange1d"
                },
                "x_scale": {
                  "id": "e4cde760-b669-4b0b-8ab1-e3340774efdc",
                  "type": "LinearScale"
                },
                "y_range": {
                  "id": "f433b0b9-d344-49a8-a6ed-3caeaf7f5723",
                  "type": "DataRange1d"
                },
                "y_scale": {
                  "id": "db8be67e-902a-4b21-a2d5-dd198dc84c61",
                  "type": "LinearScale"
                }
              },
              "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
              "subtype": "Figure",
              "type": "Plot"
            }, {
              "attributes": {},
              "id": "4b106816-d3ac-4e00-b04b-939cac85d0e5",
              "type": "ToolEvents"
            }, {
              "attributes": {
                "data_source": {
                  "id": "edc1c087-a474-4f20-a0bf-2d4a4b4e1a43",
                  "type": "ColumnDataSource"
                },
                "glyph": {
                  "id": "468e4d05-0d65-4aed-801f-abae22c46f2a",
                  "type": "Circle"
                },
                "hover_glyph": null,
                "muted_glyph": null,
                "nonselection_glyph": {
                  "id": "b1fe3178-21ba-4d27-bcf7-1baa0565ebeb",
                  "type": "Circle"
                },
                "selection_glyph": null
              },
              "id": "fc192fc0-63dd-48d0-9706-74cf27cc7698",
              "type": "GlyphRenderer"
            }, {
              "attributes": {
                "plot": {
                  "id": "a7c5f0c1-a763-4af1-8296-0116032efc6c",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "3fa03d99-8a7e-45dd-ad79-b6eee71ae9c9",
                  "type": "BasicTicker"
                }
              },
              "id": "65e6a0b9-824b-4e42-87cb-394aea51f448",
              "type": "Grid"
            }, {
              "attributes": {
                "axis_label": "sepal-width",
                "axis_label_standoff": 30,
                "formatter": {
                  "id": "59e99788-d4a7-4cfc-803e-92070efe4883",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "9d69e541-e699-4d1a-883f-9521c6284b15",
                  "type": "BasicTicker"
                }
              },
              "id": "dd3b644e-c692-42df-9567-cc1c62cd0a8f",
              "type": "LinearAxis"
            }, {
              "attributes": {},
              "id": "b0e2bb11-6133-449e-80bf-7e1c43415bed",
              "type": "BasicTickFormatter"
            }, {
              "attributes": {
                "fill_alpha": {
                  "value": 0.5
                },
                "fill_color": {
                  "value": "red"
                },
                "line_alpha": {
                  "value": 0.5
                },
                "line_color": {
                  "value": null
                },
                "size": {
                  "units": "screen",
                  "value": 20
                },
                "x": {
                  "field": "x"
                },
                "y": {
                  "field": "y"
                }
              },
              "id": "8b57d1ba-8e2b-40fb-ab60-df8f8e2489f0",
              "type": "Circle"
            }, {
              "attributes": {
                "axis_label": "sepal-length",
                "formatter": {
                  "id": "8c8b9086-23c9-4bfd-80ad-16d6bf7c0f4a",
                  "type": "BasicTickFormatter"
                },
                "plot": {
                  "id": "7ee9a372-216d-427e-ac88-87246ef5036d",
                  "subtype": "Figure",
                  "type": "Plot"
                },
                "ticker": {
                  "id": "2c997969-c76c-48a9-9087-ed9e3c8c6b42",
                  "type": "BasicTicker"
                }
              },
              "id": "4bbfd361-219c-4b1b-9b01-eb84af28f0ee",
              "type": "LinearAxis"
            }, {
              "attributes": {},
              "id": "f02726fc-823f-4948-b651-f2d20220221d",
              "type": "LinearScale"
            }, {
              "attributes": {},
              "id": "1a988494-c8b7-461c-b4a5-77ac24ad2ed5",
              "type": "ToolEvents"
            }],
            "root_ids": ["f1b745c0-baa1-45cc-8d2b-8025d462d02c", "4b2f7540-7118-4dfd-9834-3b3273e0fd0a", "7ee9a372-216d-427e-ac88-87246ef5036d", "49facf79-b4a3-482a-9631-ddbf0634a212", "a7c5f0c1-a763-4af1-8296-0116032efc6c"]
          },
          "title": "Bokeh Application",
          "version": "0.12.6"
        }
      };
      var render_items = [{
        "docid": "a3835b77-5309-4f56-b60a-49301dad78ad",
        "elementid": "732d5268-11f9-4700-b52e-41e3c7943682",
        "modelid": "a7c5f0c1-a763-4af1-8296-0116032efc6c"
      }];

      Bokeh.embed.embed_items(docs_json, render_items);
    });
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();