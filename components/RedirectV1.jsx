import React from 'react'

let data = {
  flylight: {
    query_name: "line",
    example_query_value: "R27B03",
    do_redirect: function(line) {
        var blank, blank_key, el, form, formData, hiddenField, i, j, key, len, len1, value;

        formData = [];
        formData.push(["_search_toggle", "general"]);
        formData.push(["line", line]);
        blank = ["lines", "genes", "mlines", "dlines"];

        for (i = 0, len = blank.length; i < len; i++) {
          blank_key = blank[i];
          formData.push([blank_key, ""]);
        }

        formData.push(["_gsearch", "Search"]);
        formData.push(["_search_logic", "AND"]);
        formData.push(["_disc_search_logic", "AND"]);
        formData.push(["_embryo_search_logic", "AND"]);
        formData.push([".cgifields", "_search_toggle"]);
        formData.push([".cgifields", "dline"]);
        formData.push([".cgifields", "mline"]);
        formData.push([".cgifields", "term"]);
        formData.push([".cgifields", "lline"]);
        formData.push([".cgifields", "gfp_pattern"]);
        formData.push([".cgifields", "line"]);
        formData.push([".cgifields", "lterm"]);
        form = document.createElement('form');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', 'http://flweb.janelia.org/cgi-bin/flew.cgi');
        for (j = 0, len1 = formData.length; j < len1; j++) {
          el = formData[j];
          key = el[0];
          value = el[1];
          hiddenField = document.createElement('input');
          hiddenField.setAttribute('type', 'hidden');
          hiddenField.setAttribute('name', key);
          hiddenField.setAttribute('value', value);
          form.appendChild(hiddenField);
        }
        document.body.appendChild(form);
        form.submit();
    }
  },
  bbweb: {
    query_name: "vt",
    example_query_value: "05534",
    do_redirect: function(vt_number) {
      console.log("redirecting to bbweb for vt",vt_number);
      let brainbase_url = "http://brainbase.imp.ac.at/bbweb/#6?st=byline&q="+vt_number;
      console.log("brainbase_url",brainbase_url)
      window.location = brainbase_url;
    }
  },
  vdrc: {
    query_name: "vt",
    example_query_value: "05534",
    do_redirect: function(vt_number) {
      console.log("redirecting to VDRC for vt",vt_number);
      let vdrc_url = 'http://stockcenter.vdrc.at/control/keywordsearch?SEARCH_CATALOG_ID=VDRC_Catalog&SEARCH_CATEGORY_ID=VDRC_All&SEARCH_STRING=vt'+vt_number+'&VIEW_SIZE=100';
      console.log("vdrc_url",vdrc_url );
      window.location = vdrc_url;
    }
  }
};

let RedirectV1 = React.createClass({
  render: function () {
    let destination = this.props.params.destination;
    let query = this.props.query;
    console.log("this.props",this.props);
    console.log("query",query);

    let this_data = data[destination];
    let arg = query[this_data.query_name];
    let example_link = this.props.path + "?" + this_data.query_name + "=" + this_data.example_query_value;

    if (typeof arg === "undefined") {
      return (
        <main>
          Error, for {destination}, you need to specify a query parameter "{this_data.query_name}".
          Example link <a href={example_link}> {example_link} </a>
        </main>
      );
    }

    if (arg.length >1 & arg.endsWith("/")) {
      arg = arg.substring(0,arg.length-1);
    }
    console.log("arg = ",arg);

    this_data.do_redirect(arg);

    return (
      <main>
        You will be redirected for destination {destination} with query {query}.
      </main>
    );
  }
})

export default RedirectV1
