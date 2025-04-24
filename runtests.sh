#!/bin/bash

# Run tests
echo "
        ===============================================
        =                                             =
        =                RUNNING TESTS                =
        =                                             =
        ===============================================
        "
npm run playwright

# Show HTML report
# npx playwright show-report

echo "
        ===============================================
        =                                             =
        =                TEST RUN COMPLETE            =
        =                                             =
        ===============================================
        "