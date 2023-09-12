import { mxRectangle } from '@mxgraph/util/mxRectangle';

export class mxConstants {
  static DEFAULT_HOTSPOT = 0.3;
  static MIN_HOTSPOT_SIZE = 8;
  static MAX_HOTSPOT_SIZE = 0;
  static RENDERING_HINT_EXACT = 'exact';
  static RENDERING_HINT_FASTER = 'faster';
  static RENDERING_HINT_FASTEST = 'fastest';
  static DIALECT_SVG = 'svg';
  static DIALECT_VML = 'vml';
  static DIALECT_MIXEDHTML = 'mixedHtml';
  static DIALECT_PREFERHTML = 'preferHtml';
  static DIALECT_STRICTHTML = 'strictHtml';
  static NS_SVG = 'http://www.w3.org/2000/svg';
  static NS_XHTML = 'http://www.w3.org/1999/xhtml';
  static NS_XLINK = 'http://www.w3.org/1999/xlink';
  static SHADOWCOLOR = 'gray';
  static VML_SHADOWCOLOR = 'gray';
  static SHADOW_OFFSET_X = 2;
  static SHADOW_OFFSET_Y = 3;
  static SHADOW_OPACITY = 1;
  static NODETYPE_ELEMENT = 1;
  static NODETYPE_ATTRIBUTE = 2;
  static NODETYPE_TEXT = 3;
  static NODETYPE_CDATA = 4;
  static NODETYPE_ENTITY_REFERENCE = 5;
  static NODETYPE_ENTITY = 6;
  static NODETYPE_PROCESSING_INSTRUCTION = 7;
  static NODETYPE_COMMENT = 8;
  static NODETYPE_DOCUMENT = 9;
  static NODETYPE_DOCUMENTTYPE = 10;
  static NODETYPE_DOCUMENT_FRAGMENT = 11;
  static NODETYPE_NOTATION = 12;
  static TOOLTIP_VERTICAL_OFFSET = 16;
  static DEFAULT_VALID_COLOR = '#00FF00';
  static DEFAULT_INVALID_COLOR = '#FF0000';
  static OUTLINE_HIGHLIGHT_COLOR = '#00FF00';
  static OUTLINE_HIGHLIGHT_STROKEWIDTH = 5;
  static HIGHLIGHT_STROKEWIDTH = 3;
  static HIGHLIGHT_SIZE = 2;
  static HIGHLIGHT_OPACITY = 100;
  static CURSOR_MOVABLE_VERTEX = 'move';
  static CURSOR_MOVABLE_EDGE = 'move';
  static CURSOR_LABEL_HANDLE = 'default';
  static CURSOR_TERMINAL_HANDLE = 'pointer';
  static CURSOR_BEND_HANDLE = 'crosshair';
  static CURSOR_VIRTUAL_BEND_HANDLE = 'crosshair';
  static CURSOR_CONNECT = 'pointer';
  static HIGHLIGHT_COLOR = '#00FF00';
  static CONNECT_TARGET_COLOR = '#0000FF';
  static INVALID_CONNECT_TARGET_COLOR = '#FF0000';
  static DROP_TARGET_COLOR = '#0000FF';
  static VALID_COLOR = '#00FF00';
  static INVALID_COLOR = '#FF0000';
  static EDGE_SELECTION_COLOR = '#00FF00';
  static VERTEX_SELECTION_COLOR = '#00FF00';
  static VERTEX_SELECTION_STROKEWIDTH = 1;
  static EDGE_SELECTION_STROKEWIDTH = 1;
  static VERTEX_SELECTION_DASHED = true;
  static EDGE_SELECTION_DASHED = true;
  static GUIDE_COLOR = '#FF0000';
  static GUIDE_STROKEWIDTH = 1;
  static OUTLINE_COLOR = '#0099FF';
  static OUTLINE_STROKEWIDTH = 3;
  static HANDLE_SIZE = 6;
  static LABEL_HANDLE_SIZE = 4;
  static HANDLE_FILLCOLOR = '#00FF00';
  static HANDLE_STROKECOLOR = 'black';
  static LABEL_HANDLE_FILLCOLOR = 'yellow';
  static CONNECT_HANDLE_FILLCOLOR = '#0000FF';
  static LOCKED_HANDLE_FILLCOLOR = '#FF0000';
  static OUTLINE_HANDLE_FILLCOLOR = '#00FFFF';
  static OUTLINE_HANDLE_STROKECOLOR = '#0033FF';
  static DEFAULT_FONTFAMILY = 'Arial,Helvetica';
  static DEFAULT_FONTSIZE = 11;
  static DEFAULT_TEXT_DIRECTION = '';
  static LINE_HEIGHT = 1.2;
  static WORD_WRAP = 'normal';
  static ABSOLUTE_LINE_HEIGHT = false;
  static DEFAULT_FONTSTYLE = 0;
  static DEFAULT_STARTSIZE = 40;
  static DEFAULT_MARKERSIZE = 6;
  static DEFAULT_IMAGESIZE = 24;
  static ENTITY_SEGMENT = 30;
  static RECTANGLE_ROUNDING_FACTOR = 0.15;
  static LINE_ARCSIZE = 20;
  static ARROW_SPACING = 0;
  static ARROW_WIDTH = 30;
  static ARROW_SIZE = 30;
  static PAGE_FORMAT_A4_PORTRAIT = new mxRectangle(0, 0, 827, 1169);
  static PAGE_FORMAT_A4_LANDSCAPE = new mxRectangle(0, 0, 1169, 827);
  static PAGE_FORMAT_LETTER_PORTRAIT = new mxRectangle(0, 0, 850, 1100);
  static PAGE_FORMAT_LETTER_LANDSCAPE = new mxRectangle(0, 0, 1100, 850);
  static NONE = 'none';
  static STYLE_PERIMETER = 'perimeter';
  static STYLE_SOURCE_PORT = 'sourcePort';
  static STYLE_TARGET_PORT = 'targetPort';
  static STYLE_PORT_CONSTRAINT = 'portConstraint';
  static STYLE_PORT_CONSTRAINT_ROTATION = 'portConstraintRotation';
  static STYLE_SOURCE_PORT_CONSTRAINT = 'sourcePortConstraint';
  static STYLE_TARGET_PORT_CONSTRAINT = 'targetPortConstraint';
  static STYLE_OPACITY = 'opacity';
  static STYLE_FILL_OPACITY = 'fillOpacity';
  static STYLE_STROKE_OPACITY = 'strokeOpacity';
  static STYLE_TEXT_OPACITY = 'textOpacity';
  static STYLE_TEXT_DIRECTION = 'textDirection';
  static STYLE_OVERFLOW = 'overflow';
  static STYLE_ORTHOGONAL = 'orthogonal';
  static STYLE_EXIT_X = 'exitX';
  static STYLE_EXIT_Y = 'exitY';
  static STYLE_EXIT_DX = 'exitDx';
  static STYLE_EXIT_DY = 'exitDy';
  static STYLE_EXIT_PERIMETER = 'exitPerimeter';
  static STYLE_ENTRY_X = 'entryX';
  static STYLE_ENTRY_Y = 'entryY';
  static STYLE_ENTRY_DX = 'entryDx';
  static STYLE_ENTRY_DY = 'entryDy';
  static STYLE_ENTRY_PERIMETER = 'entryPerimeter';
  static STYLE_WHITE_SPACE = 'whiteSpace';
  static STYLE_ROTATION = 'rotation';
  static STYLE_FILLCOLOR = 'fillColor';
  static STYLE_POINTER_EVENTS = 'pointerEvents';
  static STYLE_SWIMLANE_FILLCOLOR = 'swimlaneFillColor';
  static STYLE_MARGIN = 'margin';
  static STYLE_GRADIENTCOLOR = 'gradientColor';
  static STYLE_GRADIENT_DIRECTION = 'gradientDirection';
  static STYLE_STROKECOLOR = 'strokeColor';
  static STYLE_SEPARATORCOLOR = 'separatorColor';
  static STYLE_STROKEWIDTH = 'strokeWidth';
  static STYLE_ALIGN = 'align';
  static STYLE_VERTICAL_ALIGN = 'verticalAlign';
  static STYLE_LABEL_WIDTH = 'labelWidth';
  static STYLE_LABEL_POSITION = 'labelPosition';
  static STYLE_VERTICAL_LABEL_POSITION = 'verticalLabelPosition';
  static STYLE_IMAGE_ASPECT = 'imageAspect';
  static STYLE_IMAGE_ALIGN = 'imageAlign';
  static STYLE_IMAGE_VERTICAL_ALIGN = 'imageVerticalAlign';
  static STYLE_GLASS = 'glass';
  static STYLE_IMAGE = 'image';
  static STYLE_IMAGE_WIDTH = 'imageWidth';
  static STYLE_IMAGE_HEIGHT = 'imageHeight';
  static STYLE_IMAGE_BACKGROUND = 'imageBackground';
  static STYLE_IMAGE_BORDER = 'imageBorder';
  static STYLE_FLIPH = 'flipH';
  static STYLE_FLIPV = 'flipV';
  static STYLE_NOLABEL = 'noLabel';
  static STYLE_NOEDGESTYLE = 'noEdgeStyle';
  static STYLE_LABEL_BACKGROUNDCOLOR = 'labelBackgroundColor';
  static STYLE_LABEL_BORDERCOLOR = 'labelBorderColor';
  static STYLE_LABEL_PADDING = 'labelPadding';
  static STYLE_INDICATOR_SHAPE = 'indicatorShape';
  static STYLE_INDICATOR_IMAGE = 'indicatorImage';
  static STYLE_INDICATOR_COLOR = 'indicatorColor';
  static STYLE_INDICATOR_STROKECOLOR = 'indicatorStrokeColor';
  static STYLE_INDICATOR_GRADIENTCOLOR = 'indicatorGradientColor';
  static STYLE_INDICATOR_SPACING = 'indicatorSpacing';
  static STYLE_INDICATOR_WIDTH = 'indicatorWidth';
  static STYLE_INDICATOR_HEIGHT = 'indicatorHeight';
  static STYLE_INDICATOR_DIRECTION = 'indicatorDirection';
  static STYLE_SHADOW = 'shadow';
  static STYLE_SEGMENT = 'segment';
  static STYLE_ENDARROW = 'endArrow';
  static STYLE_STARTARROW = 'startArrow';
  static STYLE_ENDSIZE = 'endSize';
  static STYLE_STARTSIZE = 'startSize';
  static STYLE_SWIMLANE_LINE = 'swimlaneLine';
  static STYLE_ENDFILL = 'endFill';
  static STYLE_STARTFILL = 'startFill';
  static STYLE_DASHED = 'dashed';
  static STYLE_DASH_PATTERN = 'dashPattern';
  static STYLE_FIX_DASH = 'fixDash';
  static STYLE_ROUNDED = 'rounded';
  static STYLE_CURVED = 'curved';
  static STYLE_ARCSIZE = 'arcSize';
  static STYLE_ABSOLUTE_ARCSIZE = 'absoluteArcSize';
  static STYLE_SOURCE_PERIMETER_SPACING = 'sourcePerimeterSpacing';
  static STYLE_TARGET_PERIMETER_SPACING = 'targetPerimeterSpacing';
  static STYLE_PERIMETER_SPACING = 'perimeterSpacing';
  static STYLE_SPACING = 'spacing';
  static STYLE_SPACING_TOP = 'spacingTop';
  static STYLE_SPACING_LEFT = 'spacingLeft';
  static STYLE_SPACING_BOTTOM = 'spacingBottom';
  static STYLE_SPACING_RIGHT = 'spacingRight';
  static STYLE_HORIZONTAL = 'horizontal';
  static STYLE_DIRECTION = 'direction';
  static STYLE_ANCHOR_POINT_DIRECTION = 'anchorPointDirection';
  static STYLE_ELBOW = 'elbow';
  static STYLE_FONTCOLOR = 'fontColor';
  static STYLE_FONTFAMILY = 'fontFamily';
  static STYLE_FONTSIZE = 'fontSize';
  static STYLE_FONTSTYLE = 'fontStyle';
  static STYLE_ASPECT = 'aspect';
  static STYLE_AUTOSIZE = 'autosize';
  static STYLE_FOLDABLE = 'foldable';
  static STYLE_EDITABLE = 'editable';
  static STYLE_BACKGROUND_OUTLINE = 'backgroundOutline';
  static STYLE_BENDABLE = 'bendable';
  static STYLE_MOVABLE = 'movable';
  static STYLE_RESIZABLE = 'resizable';
  static STYLE_RESIZE_WIDTH = 'resizeWidth';
  static STYLE_RESIZE_HEIGHT = 'resizeHeight';
  static STYLE_ROTATABLE = 'rotatable';
  static STYLE_CLONEABLE = 'cloneable';
  static STYLE_DELETABLE = 'deletable';
  static STYLE_SHAPE = 'shape';
  static STYLE_EDGE = 'edgeStyle';
  static STYLE_JETTY_SIZE = 'jettySize';
  static STYLE_SOURCE_JETTY_SIZE = 'sourceJettySize';
  static STYLE_TARGET_JETTY_SIZE = 'targetJettySize';
  static STYLE_LOOP = 'loopStyle';
  static STYLE_ORTHOGONAL_LOOP = 'orthogonalLoop';
  static STYLE_ROUTING_CENTER_X = 'routingCenterX';
  static STYLE_ROUTING_CENTER_Y = 'routingCenterY';
  static FONT_BOLD = 1;
  static FONT_ITALIC = 2;
  static FONT_UNDERLINE = 4;
  static FONT_STRIKETHROUGH = 8;
  static SHAPE_RECTANGLE = 'rectangle';
  static SHAPE_ELLIPSE = 'ellipse';
  static SHAPE_DOUBLE_ELLIPSE = 'doubleEllipse';
  static SHAPE_RHOMBUS = 'rhombus';
  static SHAPE_LINE = 'line';
  static SHAPE_IMAGE = 'image';
  static SHAPE_ARROW = 'arrow';
  static SHAPE_ARROW_CONNECTOR = 'arrowConnector';
  static SHAPE_LABEL = 'label';
  static SHAPE_CYLINDER = 'cylinder';
  static SHAPE_SWIMLANE = 'swimlane';
  static SHAPE_CONNECTOR = 'connector';
  static SHAPE_ACTOR = 'actor';
  static SHAPE_CLOUD = 'cloud';
  static SHAPE_TRIANGLE = 'triangle';
  static SHAPE_HEXAGON = 'hexagon';
  static ARROW_CLASSIC = 'classic';
  static ARROW_CLASSIC_THIN = 'classicThin';
  static ARROW_BLOCK = 'block';
  static ARROW_BLOCK_THIN = 'blockThin';
  static ARROW_OPEN = 'open';
  static ARROW_OPEN_THIN = 'openThin';
  static ARROW_OVAL = 'oval';
  static ARROW_DIAMOND = 'diamond';
  static ARROW_DIAMOND_THIN = 'diamondThin';
  static ALIGN_LEFT = 'left';
  static ALIGN_CENTER = 'center';
  static ALIGN_RIGHT = 'right';
  static ALIGN_TOP = 'top';
  static ALIGN_MIDDLE = 'middle';
  static ALIGN_BOTTOM = 'bottom';
  static DIRECTION_NORTH = 'north';
  static DIRECTION_SOUTH = 'south';
  static DIRECTION_EAST = 'east';
  static DIRECTION_WEST = 'west';
  static TEXT_DIRECTION_DEFAULT = '';
  static TEXT_DIRECTION_AUTO = 'auto';
  static TEXT_DIRECTION_LTR = 'ltr';
  static TEXT_DIRECTION_RTL = 'rtl';
  static DIRECTION_MASK_NONE = 0;
  static DIRECTION_MASK_WEST = 1;
  static DIRECTION_MASK_NORTH = 2;
  static DIRECTION_MASK_SOUTH = 4;
  static DIRECTION_MASK_EAST = 8;
  static DIRECTION_MASK_ALL = 15;
  static ELBOW_VERTICAL = 'vertical';
  static ELBOW_HORIZONTAL = 'horizontal';
  static EDGESTYLE_ELBOW = 'elbowEdgeStyle';
  static EDGESTYLE_ENTITY_RELATION = 'entityRelationEdgeStyle';
  static EDGESTYLE_LOOP = 'loopEdgeStyle';
  static EDGESTYLE_SIDETOSIDE = 'sideToSideEdgeStyle';
  static EDGESTYLE_TOPTOBOTTOM = 'topToBottomEdgeStyle';
  static EDGESTYLE_ORTHOGONAL = 'orthogonalEdgeStyle';
  static EDGESTYLE_SEGMENT = 'segmentEdgeStyle';
  static PERIMETER_ELLIPSE = 'ellipsePerimeter';
  static PERIMETER_RECTANGLE = 'rectanglePerimeter';
  static PERIMETER_RHOMBUS = 'rhombusPerimeter';
  static PERIMETER_HEXAGON = 'hexagonPerimeter';
  static PERIMETER_TRIANGLE = 'trianglePerimeter';
}
