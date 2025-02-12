/*
 * Copyright (C) 2017-2019 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.dremio.exec.store.dfs;

import java.io.IOException;

import com.dremio.io.CompressionCodecFactory;
import com.dremio.io.file.FileAttributes;
import com.dremio.io.file.FileSystem;


public abstract class FormatMatcher {
  static final org.slf4j.Logger logger = org.slf4j.LoggerFactory.getLogger(FormatMatcher.class);

  public abstract boolean matches(FileSystem fs, FileSelection fileSelection, CompressionCodecFactory codecFactory) throws IOException;
  public boolean matches(FileSystem fs, FileAttributes attributes, CompressionCodecFactory codecFactory) throws IOException {
    return false;
  }
  public abstract FormatPlugin getFormatPlugin();
}
