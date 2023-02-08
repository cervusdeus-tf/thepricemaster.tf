/**
 *
 * DO NOT EDIT THIS FILE!
 *
 * This file is merely a loader for the infinitymint.config.js and you should put inside of the hardhat key what ever you would
 * put inside of here.
 */

//them aliases
import "module-alias/register";
//import our hardhat plugins
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-change-network"; //allows hre.changeNetwork to occur
import {
  prepareConfig,
  loadInfinityMint,
  logDirect,
} from "infinitymint/dist/app/helpers";
import { createDefaultFactory } from "infinitymint/dist/app/pipes";

//create default pipe
createDefaultFactory();

//require dotenv
require("dotenv").config({
  override: false, //will not override already established environment variables
});

//load infinitymint and create default files
loadInfinityMint(false, false);

//return the infinitymint config file
let config = prepareConfig();

logDirect("🧱 Loaded hardhat.config.ts");
export default config.hardhat; //export the infinity mint configuration file
