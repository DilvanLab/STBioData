/*
 * STBioData is an application to integrate, retrieve, and visualize biodiversity data using
 * spatiotemporal information. It uses semantics, data visualization and mapping
 * techniques to achieve that.
 *
 * Copyright (c) 2018-2024  Dilvan A. Moreira
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs_react_material_ui.reagent');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.impl.template');
goog.require('reagent.interop');
cljs_react_material_ui.reagent.css_transition_group = reagent.core.adapt_react_class.call(null,(React.addons["CSSTransitionGroup"]));
cljs_react_material_ui.reagent.transition_group = reagent.core.adapt_react_class.call(null,(React.addons["TransitionGroup"]));
cljs_react_material_ui.reagent.selectable_list = reagent.core.adapt_react_class.call(null,(MaterialUI["makeSelectable"]).call(null,(MaterialUI["List"])));
cljs_react_material_ui.reagent.app_bar = reagent.core.adapt_react_class.call(null,(MaterialUI["AppBar"]));
cljs_react_material_ui.reagent.auto_complete = reagent.core.adapt_react_class.call(null,(MaterialUI["AutoComplete"]));
cljs_react_material_ui.reagent.avatar = reagent.core.adapt_react_class.call(null,(MaterialUI["Avatar"]));
cljs_react_material_ui.reagent.badge = reagent.core.adapt_react_class.call(null,(MaterialUI["Badge"]));
cljs_react_material_ui.reagent.bottom_navigation = reagent.core.adapt_react_class.call(null,(MaterialUI["BottomNavigation"]));
cljs_react_material_ui.reagent.bottom_navigation_item = reagent.core.adapt_react_class.call(null,(MaterialUI["BottomNavigationItem"]));
cljs_react_material_ui.reagent.card = reagent.core.adapt_react_class.call(null,(MaterialUI["Card"]));
cljs_react_material_ui.reagent.card_actions = reagent.core.adapt_react_class.call(null,(MaterialUI["CardActions"]));
cljs_react_material_ui.reagent.card_header = reagent.core.adapt_react_class.call(null,(MaterialUI["CardHeader"]));
cljs_react_material_ui.reagent.card_media = reagent.core.adapt_react_class.call(null,(MaterialUI["CardMedia"]));
cljs_react_material_ui.reagent.card_title = reagent.core.adapt_react_class.call(null,(MaterialUI["CardTitle"]));
cljs_react_material_ui.reagent.card_text = reagent.core.adapt_react_class.call(null,(MaterialUI["CardText"]));
cljs_react_material_ui.reagent.checkbox = reagent.core.adapt_react_class.call(null,(MaterialUI["Checkbox"]));
cljs_react_material_ui.reagent.chip = reagent.core.adapt_react_class.call(null,(MaterialUI["Chip"]));
cljs_react_material_ui.reagent.circular_progress = reagent.core.adapt_react_class.call(null,(MaterialUI["CircularProgress"]));
cljs_react_material_ui.reagent.date_picker = reagent.core.adapt_react_class.call(null,(MaterialUI["DatePicker"]));
cljs_react_material_ui.reagent.dialog = reagent.core.adapt_react_class.call(null,(MaterialUI["Dialog"]));
cljs_react_material_ui.reagent.divider = reagent.core.adapt_react_class.call(null,(MaterialUI["Divider"]));
cljs_react_material_ui.reagent.drawer = reagent.core.adapt_react_class.call(null,(MaterialUI["Drawer"]));
cljs_react_material_ui.reagent.drop_down_menu = reagent.core.adapt_react_class.call(null,(MaterialUI["DropDownMenu"]));
cljs_react_material_ui.reagent.flat_button = reagent.core.adapt_react_class.call(null,(MaterialUI["FlatButton"]));
cljs_react_material_ui.reagent.floating_action_button = reagent.core.adapt_react_class.call(null,(MaterialUI["FloatingActionButton"]));
cljs_react_material_ui.reagent.font_icon = reagent.core.adapt_react_class.call(null,(MaterialUI["FontIcon"]));
cljs_react_material_ui.reagent.grid_list = reagent.core.adapt_react_class.call(null,(MaterialUI["GridList"]));
cljs_react_material_ui.reagent.grid_tile = reagent.core.adapt_react_class.call(null,(MaterialUI["GridTile"]));
cljs_react_material_ui.reagent.icon_button = reagent.core.adapt_react_class.call(null,(MaterialUI["IconButton"]));
cljs_react_material_ui.reagent.icon_menu = reagent.core.adapt_react_class.call(null,(MaterialUI["IconMenu"]));
cljs_react_material_ui.reagent.linear_progress = reagent.core.adapt_react_class.call(null,(MaterialUI["LinearProgress"]));
cljs_react_material_ui.reagent.list = reagent.core.adapt_react_class.call(null,(MaterialUI["List"]));
cljs_react_material_ui.reagent.list_item = reagent.core.adapt_react_class.call(null,(MaterialUI["ListItem"]));
cljs_react_material_ui.reagent.menu = reagent.core.adapt_react_class.call(null,(MaterialUI["Menu"]));
cljs_react_material_ui.reagent.menu_item = reagent.core.adapt_react_class.call(null,(MaterialUI["MenuItem"]));
cljs_react_material_ui.reagent.mui_theme_provider = reagent.core.adapt_react_class.call(null,(MaterialUI["MuiThemeProvider"]));
cljs_react_material_ui.reagent.paper = reagent.core.adapt_react_class.call(null,(MaterialUI["Paper"]));
cljs_react_material_ui.reagent.popover = reagent.core.adapt_react_class.call(null,(MaterialUI["Popover"]));
cljs_react_material_ui.reagent.radio_button = reagent.core.adapt_react_class.call(null,(MaterialUI["RadioButton"]));
cljs_react_material_ui.reagent.radio_button_group = reagent.core.adapt_react_class.call(null,(MaterialUI["RadioButtonGroup"]));
cljs_react_material_ui.reagent.raised_button = reagent.core.adapt_react_class.call(null,(MaterialUI["RaisedButton"]));
cljs_react_material_ui.reagent.refresh_indicator = reagent.core.adapt_react_class.call(null,(MaterialUI["RefreshIndicator"]));
cljs_react_material_ui.reagent.select_field = reagent.core.adapt_react_class.call(null,(MaterialUI["SelectField"]));
cljs_react_material_ui.reagent.slider = reagent.core.adapt_react_class.call(null,(MaterialUI["Slider"]));
cljs_react_material_ui.reagent.subheader = reagent.core.adapt_react_class.call(null,(MaterialUI["Subheader"]));
cljs_react_material_ui.reagent.svg_icon = reagent.core.adapt_react_class.call(null,(MaterialUI["SvgIcon"]));
cljs_react_material_ui.reagent.step = reagent.core.adapt_react_class.call(null,(MaterialUI["Step"]));
cljs_react_material_ui.reagent.step_button = reagent.core.adapt_react_class.call(null,(MaterialUI["StepButton"]));
cljs_react_material_ui.reagent.step_content = reagent.core.adapt_react_class.call(null,(MaterialUI["StepContent"]));
cljs_react_material_ui.reagent.step_label = reagent.core.adapt_react_class.call(null,(MaterialUI["StepLabel"]));
cljs_react_material_ui.reagent.stepper = reagent.core.adapt_react_class.call(null,(MaterialUI["Stepper"]));
cljs_react_material_ui.reagent.snackbar = reagent.core.adapt_react_class.call(null,(MaterialUI["Snackbar"]));
cljs_react_material_ui.reagent.tabs = reagent.core.adapt_react_class.call(null,(MaterialUI["Tabs"]));
cljs_react_material_ui.reagent.tab = reagent.core.adapt_react_class.call(null,(MaterialUI["Tab"]));
cljs_react_material_ui.reagent.table = reagent.core.adapt_react_class.call(null,(MaterialUI["Table"]));
cljs_react_material_ui.reagent.table_body = reagent.core.adapt_react_class.call(null,(MaterialUI["TableBody"]));
cljs_react_material_ui.reagent.table_footer = reagent.core.adapt_react_class.call(null,(MaterialUI["TableFooter"]));
cljs_react_material_ui.reagent.table_header = reagent.core.adapt_react_class.call(null,(MaterialUI["TableHeader"]));
cljs_react_material_ui.reagent.table_header_column = reagent.core.adapt_react_class.call(null,(MaterialUI["TableHeaderColumn"]));
cljs_react_material_ui.reagent.table_row = reagent.core.adapt_react_class.call(null,(MaterialUI["TableRow"]));
cljs_react_material_ui.reagent.table_row_column = reagent.core.adapt_react_class.call(null,(MaterialUI["TableRowColumn"]));
cljs_react_material_ui.reagent.text_field = reagent.core.adapt_react_class.call(null,(MaterialUI["TextField"]));
cljs_react_material_ui.reagent.time_picker = reagent.core.adapt_react_class.call(null,(MaterialUI["TimePicker"]));
cljs_react_material_ui.reagent.toggle = reagent.core.adapt_react_class.call(null,(MaterialUI["Toggle"]));
cljs_react_material_ui.reagent.toolbar = reagent.core.adapt_react_class.call(null,(MaterialUI["Toolbar"]));
cljs_react_material_ui.reagent.toolbar_group = reagent.core.adapt_react_class.call(null,(MaterialUI["ToolbarGroup"]));
cljs_react_material_ui.reagent.toolbar_separator = reagent.core.adapt_react_class.call(null,(MaterialUI["ToolbarSeparator"]));
cljs_react_material_ui.reagent.toolbar_title = reagent.core.adapt_react_class.call(null,(MaterialUI["ToolbarTitle"]));

//# sourceMappingURL=reagent.js.map