function getMessages(req, res) {
  res.send(
    `<ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
    </ul>`
  );
}

function postMessages(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
