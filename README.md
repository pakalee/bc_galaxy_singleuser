## Open OnDemand app for a single-user Galaxy installation

The app assumes that Galaxy will be run as a single-user install (not as server).

The single-user install is assumed to be located at `$HOME/opt/galaxy`.  This OnDemand app will _configure_ (via galaxy.xml) and launch galaxy for the user.

### Notes and References

This is for Open OnDemand 1.8.

Galaxy could have library issues if you use a python with a dynamic-linked libpython. One solution is to recompile python with libpython built in (which conda seems to do as well). 

(Galaxy single-user install notes)[https://galaxyproject.org/admin/get-galaxy/]

(Open OnDemand)[https://openondemand.org/]


