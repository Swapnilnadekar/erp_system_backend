const express = require("express");
const {
  deletePrincipalData,
  editPrincipalData,
  getAllPrincipalData,
  // verifyToken,
} = require("../../controllers/admin/principal");
const {
  principalRegister,
  principalSignin,
  principalSignout,
} = require("../../controllers/admin/principal");
const { requireSignIn, upload } = require("../../middlewares/middleware");
const { isRequestValidated, validateSigninRequest, validateSignupRequestAdmin } = require("../../Validators/validators");
const router = express.Router();

router.post("/register",upload.single("profile_pic"), validateSignupRequestAdmin,isRequestValidated, requireSignIn, principalRegister);
router.post("/signin", validateSigninRequest, isRequestValidated, principalSignin);
router.post("/signout", principalSignout);
router.delete("/delete-principal/:_id", requireSignIn, deletePrincipalData);
router.put("/edit-principal-data", requireSignIn, editPrincipalData);
router.get("/get-all-principal-data", requireSignIn, getAllPrincipalData);
// router.post("/authentication/verify-token", verifyToken);

module.exports = router;
