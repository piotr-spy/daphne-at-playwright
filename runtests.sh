#!/bin/bash

# Run tests
echo "
        ===============================================
        =                                             =
        =                RUNNING TESTS                =
        =                                             =
        ===============================================
        "
npx playwright test

echo "
        ===============================================
        =                                             =
        =                TEST RUN COMPLETE            =
        =                                             =
        ===============================================
        "

# Show HTML report
# npx playwright show-report