// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_var
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @copyright  2017 The University of Southern Queensland
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_var-button
 */

/**
 * Atto text editor var plugin.
 *
 * @namespace M.atto_var
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_var').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    /**
     * A rangy object to alter CSS classes.
     *
     * @property _varApplier
     * @type Object
     * @private
     */
    _varApplier: null,

    initializer: function() {
        this.addButton({
            buttonName: 'var',
            callback: this.toggleVar,
            icon: 'icon',
            iconComponent: 'atto_var',
            inlineFormat: true,

            // Watch the following tags and add/remove highlighting as appropriate:
            tags: 'var'
        });
        this._varApplier = window.rangy.createClassApplier("editor-var");
    },

    /**
     * Toggle var in selection
     *
     * @method toggleVar
     */
    toggleVar: function() {
        // Replace all the var tags.
        this.get('host').changeToCSS('var', 'editor-var');

        // Toggle var.
        this._varApplier.toggleSelection();

        // Replace CSS classes with tags.
        this.get('host').changeToTags('editor-var', 'var');
    }
});
