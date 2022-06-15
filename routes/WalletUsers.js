const router = require('express').Router();

const handlers = require('../handlers');

router.post("/create-wallet-user", handlers.AddWalletUsers);
router.get("/get-wallet-users",handlers.getAllWalletUsers);
router.get("/get-wallet-user/:id",handlers.getWalletUserById)
router.get("/get-deleted-walletusers", handlers.getAllDeletedWalletUsers)
router.delete("/delete-wallet-user/:id", handlers.deleteWalletUser);

module.exports = router;