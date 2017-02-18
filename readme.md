After map you need to execute next command in package cammand window 
under vegetable/core:

add-migration 0218MigrationL -Context LoggingDbContext
update-database -Context LoggingDbContext

add-migration 0218MigrationD -Context BaseInfoDbContext
update-database -Context BaseInfoDbContext



