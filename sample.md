<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Random Quote Generator</title>

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Poppins", sans-serif;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
    }

    .container {
      background: rgba(255, 255, 255, 0.12);
      backdrop-filter: blur(10px);
      width: 380px;
      padding: 30px;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
      animation: fadeIn 0.6s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .quote-box {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .author {
      font-size: 14px;
      color: #e0dfff;
      margin-bottom: 25px;
    }

    .btn {
      background: #fff;
      color: #5a45d6;
      border: none;
      padding: 12px 25px;
      font-size: 14px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: 0.2s ease;
    }

    .btn:hover {
      background: #f1f1f1;
      transform: translateY(-2px);
    }
  </style>
</head>

<body>

  <div class="container">
    <div class="quote-box">
      “This is your upgraded quote box — smooth, clean, and modern.”
    </div>

    <div class="author">— Anonymous</div>

    <button class="btn">New Quote</button>
  </div>

</body>
</html>
