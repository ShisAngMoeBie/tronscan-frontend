import React, {Fragment} from "react";
import {ONE_TRX, CONTRACT_ADDRESS_USDT, CONTRACT_ADDRESS_WIN, CONTRACT_ADDRESS_GGC, TRADINGMAP, SUNWEBCONFIG, IS_SUNNET} from "../../../../constants";
import {AddressLink, ExternalLink, ContractLink, TokenTRC20Link} from "../../../common/Links";
import Field from "../../../tools/TransactionViewer/Field";
import {TRXPrice} from "../../../common/Price";
import {tu} from "../../../../utils/i18n";
import {FormattedNumber, FormattedDate, injectIntl} from "react-intl";
import rebuildList from "../../../../utils/rebuildList";
import {toUtf8} from 'tronweb'
import { NameWithId } from '../../../common/names';

import TriggerContract from './TriggerContract'

/**
 * Get the title
 * @param {*} contract 
 */
const getTitle = contract => {
    const { contract_address, method } = contract;
    let title = tu('trigger_smart_contract');
    let smartTitle = tu('normal_address_trigger_smart_contract');
    // sideChain
    if (IS_SUNNET) {
        // withdraw
        if (contract_address === SUNWEBCONFIG.SIDECHAIN && method.includes(TRADINGMAP.WITHDRAW)) {
            title = tu('sign_trigger_smart_contract');
            smartTitle = tu('sign_normal_trigger_smart_contract');
        }
    }
    return <h5>
        <i className="fa fa-exchange-alt"></i>
        {title}
        <small>{smartTitle}</small>
    </h5>;
};

export default function Info({contract}) {
    let parametersArr = [
        'MAINTENANCE_TIME_INTERVAL',
        'ACCOUNT_UPGRADE_COST',
        'CREATE_ACCOUNT_FEE',
        'TRANSACTION_FEE',
        'ASSET_ISSUE_FEE',
        'WITNESS_PAY_PER_BLOCK',
        'WITNESS_STANDBY_ALLOWANCE',
        'CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT',
        'CREATE_NEW_ACCOUNT_BANDWIDTH_RATE',
        'ALLOW_CREATION_OF_CONTRACTS',
        'REMOVE_THE_POWER_OF_THE_GR',
        'ENERGY_FEE',
        'EXCHANGE_CREATE_FEE',
        'MAX_CPU_TIME_OF_ONE_TX',
        'ALLOW_UPDATE_ACCOUNT_NAME',
        'ALLOW_SAME_TOKEN_NAME'
    ];
    let proposal,proposalVal;
    if(contract.parameters){
        for(let item in contract.parameters){
            for(let i in parametersArr){
                if(item === i){
                     proposal = parametersArr[item];
                     proposalVal = contract.parameters[item]
                }
            }
        }

    }
    console.log('contract',contract)

    let TokenIDList = [];
    let tokenIdData;
    TokenIDList.push(contract)
    if(TokenIDList){
        tokenIdData  = rebuildList(TokenIDList,'asset_name','amount')[0]
    }
    if(contract.contractType){
        switch (contract.contractType.toUpperCase()) {
            case "TRANSFERCONTRACT":
                return '';
            case "TRANSFERASSETCONTRACT":
                return '';
            case "PARTICIPATEASSETISSUECONTRACT":
                return '';
            case "WITNESSUPDATECONTRACT":
                return ''
            case "WITNESSCREATECONTRACT":
                return ''
            case "ACCOUNTUPDATECONTRACT":
                return ''
            case "ACCOUNTCREATECONTRACT":
                return ''
            case "WITHDRAWBALANCECONTRACT":
                return '';
            case "FREEZEBALANCECONTRACT":
                return '';
            case "UNFREEZEBALANCECONTRACT":
                return '';
            case "VOTEWITNESSCONTRACT":
                return '';
            case "ASSETISSUECONTRACT":
                return '';
            case "PROPOSALCREATECONTRACT":
                return '';
            case "TRIGGERSMARTCONTRACT":
                return <TriggerContract contract={...contract}></TriggerContract>;
            case "UPDATEBROKERAGECONTRACT":
                return '';
            default:
                return (
                    <Fragment>
                        <div className="card-body table-title">
                            <h5>
                                <i className="fa fa-exchange-alt"></i>
                                &nbsp;&nbsp;
                                {contract.contractType}
                            </h5>
                        </div>
                        <table className="table">
                            <tbody>
                            {
                                contract['owner_address']?
                                    <Field label="owner_address"><AddressLink address={contract['owner_address']}/></Field>
                                    :''
                            }
                            </tbody>
                        </table>
                    </Fragment>
                );
        }
    }

  return (
      <div>
          {
              contract.contractType && <div className="card-body">
                  {JSON.stringify(contract)}
              </div>
          }
      </div>

  );
}
