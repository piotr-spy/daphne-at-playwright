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

echo "
        ===============================================
        =                                             =
        =                TEST RUN COMPLETE            =
        =                                             =
        ===============================================
        "

# Show HTML report
# npx playwright show-report