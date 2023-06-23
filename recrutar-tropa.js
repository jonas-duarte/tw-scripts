// @name Recrutar tropa
// @step {gameUrl}/game.php?village={village}&screen=barracks
// @enum unit spear,sword,axe,archer
// @param(string) village
// @param(enum:unit) unit=spear
// @param(number) quantity=10
// @param(number) queueSize=3

function delay(time, random = 0) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time + ~~(Math.random() * random));
  });
}

new Promise(async (resolve, reject) => {
  try {
    if ($(`.sortable_row .${TWA.unit}`).length >= TWA.queueSize - 1) return resolve();

    const max = parseInt($(`input[name='${TWA.unit}']`).parent()[0].textContent.trim().replace(/\(|\)/g, ""));

    $(`input[name='${TWA.unit}']`).val(max > TWA.quantity ? TWA.quantity : max);
    await delay(1000, 300);

    $(".btn.btn-recruit").click();
    await delay(1000, 300);
  } catch (error) {}

  resolve();
});
