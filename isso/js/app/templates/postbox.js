var html = function (globals) {
  var i18n = globals.i18n;
  var conf = globals.conf;
  var author = globals.author;
  var email = globals.email;
  var website = globals.website;
  var notify = conf["reply-notifications-default-enabled"] ? " checked" : '';

  var divDomStr = `
  <div class='isso-postbox'>
  <div class='isso-form-wrapper'>
    <div class='isso-textarea-wrapper'>
      <div class='isso-textarea isso-placeholder' contenteditable='true'> ${i18n('postbox-text')} </div>
      <div class='isso-preview'>
        <div class='isso-comment'>
          <div class='isso-text-wrapper'>
            <div class='isso-text'></div>
          </div>
        </div>
      </div>
    </div>
    <section class='isso-auth-section'>
      <p class='isso-input-wrapper'>
        <label for='isso-postbox-author'> ${i18n('postbox-author')} </label>
        <input id='isso-postbox-author' type='text' name='author' placeholder="${i18n('postbox-author-placeholder')}" value="${author ? author : ''}" />
      </p>
      <p class='isso-input-wrapper'>
        <label for='isso-postbox-email'> ${i18n('postbox-email')} </label>
        <input id='isso-postbox-email' type='email' name='email' placeholder="${i18n('postbox-email-placeholder')}" value="${email ? email : ''}" />
      </p>
      <!-- we don't want to show webside; but we still don't want to delete them totally. so just hide.  -->
      <p class='isso-input-wrapper' style="display: none;">
        <label for='isso-postbox-website'> ${i18n('postbox-website')} </label>
        <input id='isso-postbox-website' type='text' name='website' placeholder="${i18n('postbox-website-placeholder')}" value="${(website ? website : '')}" />
      </p>
      <section class='isso-notification-section'>
        <label>
          <input type='checkbox' ${notify} name='notification' /> ${i18n('postbox-notification')}
        </label>
      </section>
      <section class="isso-btn-section">
        <p class='isso-post-action'>
          <input type='button' name='preview' value="${i18n('postbox-preview')}" />
        </p>
        <p class='isso-post-action'>
          <input type='button' name='edit' value="${i18n('postbox-edit')}" />
        </p>
        <p class='isso-post-action'>
          <input type='submit' value="${i18n('postbox-submit')}" />
        </p>
      </section>
    </section>
    <div class='isso-comment-submit-err'>
    </div>
  </div>
</div>
`;
  // `trim` is necessary, or the following innerHTML will failed to translate the str to DOM
  divDomStr = divDomStr.replace(/[ \r\n]+/, " ").trim();
  return divDomStr;
};

module.exports = html;
