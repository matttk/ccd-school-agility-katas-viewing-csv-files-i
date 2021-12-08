import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(
  onFirstPage,
  onPreviousPage,
  onNextPage,
  onLastPage,
  onExit
) {
  let finished = false;

  while (!finished) {
    const input = await ask(
      "F)irst page, P)revious page, N)ext page, L)ast page, E)xit\n"
    );

    switch (input.toLowerCase()) {
      case "f":
        onFirstPage();
        break;
      case "p":
        onPreviousPage();
        break;
      case "n":
        onNextPage();
        break;
      case "l":
        onLastPage();
        break;
      case "e":
        finished = true;

        exit();
        onExit();
        break;
      default:
        "Invalid input.";
    }
  }
}

async function ask(question) {
  const promise = await new Promise((resolve) => {
    readline.question(question, resolve);
  });

  return promise;
}

function exit() {
  readline.close();
}

export { init };
