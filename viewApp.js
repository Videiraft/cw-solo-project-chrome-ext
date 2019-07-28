export const appHtml = `
<div class="container">
  <div class="title-container"></div>
  <div>
    <form id="app-form">
      <input list="tags" name="tags" placeholder="Separate tags with commas" autocomplete="off"/></br>
      <datalist id="tags">
      </datalist>
      <input type="submit" value="Done">
    </form>
  </div>
  <div>
    <a id="log-out" href="">Log Out</a>
  </div>
  <div>
    <p id="message-feedback"></p>
  </div>
</div>
`;