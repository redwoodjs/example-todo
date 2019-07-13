import { useState } from "react";
import { Query } from "@hammerframework/hammer-web";
import { Box, Flex } from "src/lib/primitives";

import {
  AppBar,
  TextInput,
  InvoiceInfo,
  LineItems,
  Summary
} from "src/components";

const MARGIN_BOTTOM = 5;

const Page = () => {
  const [title, setTitle] = useState("I  N  V  O  I  C  E");
  const [companyName, setCompanyName] = useState("Lolsoft Inc.");
  const [companyInfo, setCompanyInfo] = useState(
    "Peter Pistorius\nBusiness Address\n101010\nBerlin, Germany"
  );
  const [recipient, setRecipient] = useState(
    "Reliable customer\nBusiness address\n12345\nUnited Kingdom"
  );
  const [invoiceInfo, setInvoiceInfo] = useState([
    [{ value: "Invoice #" }, { value: "001" }],
    [{ value: "Date" }, { value: new Intl.DateTimeFormat().format(new Date()) }]
  ]);

  const [lineItems, setLineItems] = useState([
    [{ value: "Description" }, { value: "Quantity" }, { value: "Price" }],
    [{ value: "x" }, { value: 2 }, { value: 100 }],
    [{ value: "x" }, { value: 1 }, { value: 200 }],
    [{ value: "x" }, { value: 2 }, { value: 300 }]
  ]);

  const [summary, setSummary] = useState([
    [{ value: "Subtotal" }, undefined, "0.0"],
    [{ value: "VAT" }, { value: 14 }, "0.0"],
    [{ value: "Total" }, { value: "$" }, "0.0"]
  ]);

  const [notesA, setNotesA] = useState("");
  const [notesB, setNotesB] = useState("Invoice by Billable.me");

  return (
    <>
      <AppBar />
      <Box
        mx="auto"
        css={`
          max-width: 800px;
        `}
      >
        <TextInput
          value={title}
          onChange={setTitle}
          width={1}
          my={MARGIN_BOTTOM}
          textAlign="center"
          css={`
            border: 1px #d4d6d9 solid;
            border-width: 1px 0;
            height: 48px;
            line-height: 48px;
          `}
        />

        <Flex mb={MARGIN_BOTTOM}>
          <TextInput
            multiline
            value={companyName}
            onChange={setCompanyName}
            width={1 / 2}
            css={`
              textarea {
                font-size: 40px;
              }
            `}
          />
          <TextInput
            multiline
            value={companyInfo}
            onChange={setCompanyInfo}
            width={1 / 2}
            textAlign="right"
          />
        </Flex>

        <Flex mb={MARGIN_BOTTOM}>
          <TextInput
            multiline
            value={recipient}
            onChange={setRecipient}
            width={1 / 2}
          />
          <InvoiceInfo
            value={invoiceInfo}
            onChange={setInvoiceInfo}
            width={1 / 2}
            ml="auto"
          />
        </Flex>

        <LineItems
          value={lineItems}
          onChange={setLineItems}
          width={1}
          mb={2}
          css={`
            width: calc(100% + 48px);
          `}
        />

        <Summary
          ml="auto"
          mb={MARGIN_BOTTOM}
          value={summary}
          onChange={setSummary}
          lineItems={lineItems}
        />

        <Flex mb={MARGIN_BOTTOM}>
          <TextInput
            multiline
            value={notesA}
            onChange={setNotesA}
            width={1 / 2}
          />
          <TextInput
            multiline
            value={notesB}
            onChange={setNotesB}
            width={1 / 2}
            textAlign="right"
          />
        </Flex>
      </Box>
    </>
  );
};

export default Page;
