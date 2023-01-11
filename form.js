'use strict'

/**
 * Toggle the visibility of a form group
 *
 * @param      {string}    form_id  The form identifier
 * @param      {boolean}   show     Whether to show or hide
 */
function toggle_visibility_of_form_group(form_id, show) {
  let form_element = $(form_id);
  let parent = form_element.parent();

  // kick out if you didn't find what you're looking for
  if(parent.size() <= 0) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    form_element.val('');
    parent.hide();
  }
}

/**
 * Toggle the visibility of the email field when the selected
 * email toggle changes
 */
function toggle_email_visibility(email_start_selected) {
  const email_element = $('#batch_connect_session_context_email');

  toggle_visibility_of_form_group(email_element, email_start_selected);
}

/**
 * Sets the change handler for the bc_email_on_started select.
 */
function set_bc_email_on_started_change_handler() {
  let bc_email_on_started_input = $('#batch_connect_session_context_bc_email_on_started');
  bc_email_on_started_input.change((event) => bc_email_on_started_change_handler(event));
}

/**
 * Update UI when bc_email_on_started changes
 */
function bc_email_on_started_change_handler(event) {
  toggle_email_visibility(event.target.checked);
}

/**
 * Toggle the visibility of the salloc field when the selected
 * salloc toggle changes
 */
function toggle_salloc_visibility(salloc_start_selected) {
  const salloc_element = $('#batch_connect_session_context_salloc');

  toggle_visibility_of_form_group(salloc_element, salloc_start_selected);
}

/**
 * Sets the change handler for the bc_salloc_on_started select.
 */
function set_bc_salloc_on_started_change_handler() {
  let bc_salloc_on_started_input = $('#batch_connect_session_context_bc_salloc_on_started');
  bc_salloc_on_started_input.change((event) => bc_salloc_on_started_change_handler(event));
}

/**
 * Update UI when bc_salloc_on_started changes
 */
function bc_salloc_on_started_change_handler(event) {
  toggle_salloc_visibility(event.target.checked);
}

/**
 * Sets the change handler for the node_type select.
 */
function set_node_type_change_handler() {
  let node_type_input = $('#batch_connect_session_context_node_type');
  node_type_input.change((event) => node_type_change_handler(event));
}


/**
 * Main
 */

/* Install event handlers */
$('#batch_connect_session_context_bc_email_on_started').attr("checked", false);
toggle_visibility_of_form_group($('#batch_connect_session_context_email'),false);
set_bc_email_on_started_change_handler();

$('#batch_connect_session_context_bc_salloc_on_started').attr("checked", false);
toggle_visibility_of_form_group($('#batch_connect_session_context_salloc'),false);
set_bc_salloc_on_started_change_handler();
