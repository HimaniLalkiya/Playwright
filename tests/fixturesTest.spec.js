import { test } from "../Fixtures/my_fixtures.spec.js";
import { expect } from "@playwright/test";

test("Login test @smoke", async ({ webPage }) => {
    await webPage.waitForTimeout(3000);
});

