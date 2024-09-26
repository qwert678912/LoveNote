document.getElementById('specialMessage').addEventListener('click', function() {
    window.location.href = "dist/index.html";  // Redirect to the desired page
});


const style = document.createElement('style');
style.innerHTML = `
  .surprise-message {
      font-size: 1.5em;
      color: #ff3d3d;
      margin-top: 20px;
      opacity: 0;
  }
  @keyframes revealSurprise {
      0% { opacity: 0; transform: scale(0.8); }
      100% { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);
